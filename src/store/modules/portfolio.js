const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    BUY_STOCK (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(el => el.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                price: stockPrice,
                quantity: quantity
            });
        }

        state.funds -= stockPrice * quantity;
    },
    SELL_STOCK (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(el => el.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStocks({commit}, order) {
        commit('SELL_STOCK', order);
    },
    buyStock({commit}, order) {
        commit('BUY_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            // This "getters" refers to the main state getters
            const record = getters.stocks.find(el => el.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: stock.price
            };
        });
    },
    funds(state) {
        return state.funds;
    }
};

export default {
    // namespaced: true, // Makes this module auto-namespaced
    state,
    mutations,
    actions,
    getters
}