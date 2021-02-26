<template>
  <div class="home">
    <img alt="Vue logo" src="https://lh3.googleusercontent.com/proxy/PPXqf5xfF2jlzPAlpPrrfPpdVhlyyD0487hkvz9eP0lMO4_bFaBOzBpO8cfyn73Y68usqL1EUMv8OwgCTfB0qcrtU9MkkWUKdNVMh01ksMQNTLdsP0YjmKxe6pFnqa9MoEGO9vOjLw" height="200" width="200">
    <HelloWorld msg="Crypto Dash"/>
    <p>Enter a ticker</p>
    <form @submit="redirect">
      <input v-model="ticker"> 
      <input type="submit">
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      ticker: ""
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    redirect: function () {
      this.$router.push(`/assets/${this.ticker}`)
    }
  }
}
</script>
