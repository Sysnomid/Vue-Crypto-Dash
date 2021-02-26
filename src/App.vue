<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');
html { 
  font-family: 'Inter', sans-serif;
  margin: 10%;
}
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

</style>
