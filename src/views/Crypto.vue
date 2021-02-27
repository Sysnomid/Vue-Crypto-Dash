<template>
  <div class="home">
    <router-view/>
    <img alt="Crypto" src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG25.png" height="200" width="200"/>
    <h1>Crypto Dash</h1>
    <p>Enter a ticker</p>
    <form @submit="redirect">
      <input v-model="ticker" placeholder="BTC"> 
      <button type="submit">Submit</button>
    </form>
    <hr width="40%" class="spaced"/>
    <br />
   <div class="spaced">
     <h3>Coins</h3>
    <a href="/#/crypto/assets/BTC">BTC</a>
    <a href="/#/crypto/assets/ETH">ETH</a>
    <a href="/#/crypto/assets/ADA">ADA</a>
    <a href="/#/crypto/assets/DOT">DOT</a>
    <a href="/#/crypto/assets/LINK">LINK</a>
    <a href="/#/crypto/assets/XMR">XMR</a>
    <a href="/#/crypto/assets/DOGE">DOGE</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      ticker: ""
    }
  },
  methods: {
    redirect: function () {
      this.$router.push(`/crypto/assets/${this.ticker}`)
    }
  }
}
</script>

<style scoped>
  .spaced {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    font-size: 25px;
    margin: 0.5em;
  }
</style>
