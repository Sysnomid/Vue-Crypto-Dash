<template>
    <div>
        <h1 class="green">{{name}}</h1>
        <h1> ${{marketData}} </h1>
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
            reverse: false
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
.green {
    color: #088c4a
}
input {
    padding: 1em;
    margin: 1em;
    font-size: 13px;
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