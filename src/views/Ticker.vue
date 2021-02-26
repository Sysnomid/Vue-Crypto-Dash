<template>
    <div>
        <h1 class="green">{{ticker}}</h1>
        <h1> ${{marketData}} </h1>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data () {
        return {
            id: this.$route.params.id,
            CryptoAmt:  "",
            marketData: "",
            ticker: ""
        }
    },
    async mounted() {
        const test = await axios.get(`https://data.messari.io/api/v1/assets/${this.id}/metrics`)
        .then(response => (response.data))
        .catch(error => {
            console.log(error)
            this.$router.push('/err')
        });
        this.marketData = test.data.market_data.price_usd;
        this.ticker = test.data.name
    }
}
</script>

<style scoped>
.green {
    color: #088c4a
}
</style>