import Vue from 'vue';
import Vuex from 'vuex';

import stocksModule from './modules/stocks';
import portfolioModule from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks: stocksModule,
        portfolio: portfolioModule
    }
});