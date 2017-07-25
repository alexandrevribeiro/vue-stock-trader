<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input 
                    type="number" 
                    class="form-control"
                    placeholder="Quantity"
                    v-model="quantity">
            </div>
            <div class="pull-right">
                <button
                    class="btn btn-success"
                    @click="buy"
                    :disabled="quantity <= 0 || !isInteger(quantity)">
                    Buy
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            };
        },
        methods: {
            ...mapActions(/*'portfolio',*/ [
                'buyStock', // map 'this.buyStock()' to 'this.$store.dispatch('portfolio/buyStock')'
            ]),
            buy() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                // this.$store.dispatch('portfolio/buyStock', order);
                this.buyStock(order);
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

