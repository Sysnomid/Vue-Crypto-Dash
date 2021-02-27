<template>
    <div>
        <h1 class="title-color">{{name}}</h1>
        <h1> ${{marketData}} </h1>
        
        <p class="green"> 24 Hour High: ${{high}} </p> <p class="red"> 24 Hour Low: ${{low}} </p>
        
        <br />

        <h2>Convert</h2>

        <div v-if="!reverse">
            <h3> ${{USD}} = {{CryptoAmt}} {{name}} </h3>
        </div>
        <div v-if="reverse">
            <h3> {{CryptoAmt}} {{name}} = ${{USD}} </h3>
        </div>

       <div v-if="!reverse">
            <input v-model="USD" type="number" @input="clean() + convert()">
            <button @click="reversemain" class="reversed"> <i class="fa fa-undo" aria-hidden="true"></i> </button>
            <input v-model="CryptoAmt" type="number" readonly>
        </div>
        <div v-if="reverse">
            <input v-model="CryptoAmt" type="number" @input="clean() + convert()">
            <button @click="reversemain" class="reversed"> <i class="fa fa-undo" aria-hidden="true"></i> </button>
            <input v-model="USD" type="number" readonly>
        </div>

    </div>
</template>

<script>
import axios from "axios"

export default {
    data () {
        return {
            id: this.$route.params.id,
            CryptoAmt:  "",
            USD: "0",
            marketData: "",
            name: "",
            reverse: false,
            low: "",
            high: ""
        }
    },

    async mounted() {
        const test = await axios.get(`https://data.messari.io/api/v1/assets/${this.id}/metrics`)
        .then(response => (response.data))
        .catch(error => {
            console.log(error)
            this.$router.push('/err')
        });
        this.marketData = Math.trunc(test.data.market_data.price_usd*100000)/100000;
        this.name = test.data.name
        this.high = Math.trunc(test.data.market_data.ohlcv_last_24_hour.high*100000)/100000
        this.low = Math.trunc(test.data.market_data.ohlcv_last_24_hour.low*100000)/100000
    },

    methods: {
        convert: function(){
            if (!this.reverse){
                this.CryptoAmt = Math.trunc(Number(this.USD) / Number(this.marketData)*100000)/100000;
            }

            else if (this.reverse){
                this.USD = Math.trunc(Number(this.marketData) * Number(this.CryptoAmt)*100000)/100000;
            }
       },
        reversemain: function(){
            if (!this.reverse){ this.reverse = true }
            else if (this.reverse){ this.reverse = false }
            console.log(this.reverse)
        },
        clean: function(){
            if (!this.reverse){
                this.CryptoAmt=""
            }
            else if (this.reverse){
                this.USD=""
            }
        }
    }
}
</script>

<style global>
.title-color {
    color: #5300f8;
}

.green {
    color: #5fc594;
}
.red {
    color: #c55f5f;
}
input {
    padding: 1em;
    margin: 1em;
    font-size: 15px;
    background-color: rgb(218, 218, 218);
    border-radius: 10px;
    border: none;
}
button {
    padding: 1em;
    margin: 1em;
    font-size: 13px;
    background-color: rgb(172, 81, 81);
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.reversed {
    background-color: rgb(81, 155, 172);
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
</style>