<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input 
                    type="number" 
                    class="form-control"
                    placeholder="Quantity"
                    v-model="quantity"
                    :class="{ danger: insufficientQuantity }">
            </div>
            <div class="pull-right">
                <button
                    class="btn btn-info"
                    @click="sellStocks"
                    :disabled="quantity <= 0 || !isInteger(quantity)">
                    {{ insufficientQuantity ? 'Insufficient stock' : 'Sell' }} 
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>

    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            };
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions(/*'portfolio',*/ {
                placeSellStocks: 'sellStocks' // map 'this.sellStocks()' to 'this.$store.dispatch('portfolio/sellStocks')'
            }),
            sellStocks() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellStocks(order);
                this.quantity = 0;
            },
            isInteger(value) {
                if (isNaN(value))
                    return false;

                var number = parseFloat(value);
                return number === Math.trunc(number);
            }
        }
    }
</script>

