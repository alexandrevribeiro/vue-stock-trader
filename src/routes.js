import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Stock from './components/stocks/Stock.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import PortfolioStock from './components/portfolio/Stock.vue';

export const routes = [

    { path: '/', name: 'home', components: {
        default: Home, 
        Header: Header
    } },

    { path: '/portfolio', name: 'portfolio', component: Portfolio },

    { path: '/stocks', name: 'stocks', component: Stocks },    

];