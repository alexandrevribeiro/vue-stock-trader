import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    SET_STOCKS (state, stocks) {
        state.stocks = stocks;
    },
    RND_STOCKS (state) {        
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        // Commits the "BUY_STOCK" mutation of the "portfolio.js"
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    },
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {    
    // namespaced: true, // Makes this module auto-namespaced
    state,
    mutations,
    actions,
    getters
}