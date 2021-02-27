<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <title>Sysnomid Vue Experiments</title>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');
@import url('https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css');

html { 
  font-family: 'Inter', sans-serif;
  margin: 10%;
  overflow-x: hidden;
}
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

</style>
