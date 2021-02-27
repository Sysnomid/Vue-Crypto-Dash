<template>
  <div class="home">
    <img alt="Crypto" src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG25.png" height="200" width="200"/>
    <h1> Crypto Dash </h1>
    <p>Enter a ticker</p>
    <form @submit="redirect">
      <input v-model="ticker"> 
      <button type="submit">Submit</button>
    </form>
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
