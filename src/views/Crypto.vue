<template>
  <div class="home">
    <img alt="Vue logo" src="https://lh3.googleusercontent.com/proxy/PPXqf5xfF2jlzPAlpPrrfPpdVhlyyD0487hkvz9eP0lMO4_bFaBOzBpO8cfyn73Y68usqL1EUMv8OwgCTfB0qcrtU9MkkWUKdNVMh01ksMQNTLdsP0YjmKxe6pFnqa9MoEGO9vOjLw" height="200" width="200">
    <h1> Crypto Dash </h1>
    <p>Enter a ticker</p>
    <form @submit="redirect">
      <input v-model="ticker"> 
      <input type="submit">
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
