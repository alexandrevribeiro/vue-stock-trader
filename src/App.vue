<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col xs 12">
                <router-view></router-view>
            </div>
        </div>          
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import { mapActions } from 'vuex';

    export default {
        components: {
            appHeader: Header
        },
        methods: {
            ...mapActions('stocks', [
                'initStocks', // map 'this.initStocks()' to 'this.$store.dispatch('initStocks')'
            ])
        },
        created() {
            this.initStocks();
        }
    }
</script>

<style>
    body {
        padding: 20px;
    }
</style>
