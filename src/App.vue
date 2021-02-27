<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <a href="https://github.com/Sysnomid/vue-experiments">Github</a>
      <a href="https://sysnomid.com">Website</a>
    </div>
    <router-view/>
    <title>Sysnomid Vue Experiments</title>
  </div>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');
@import url('https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css');

html { 
  font-family: 'Inter', sans-serif;
  margin: 8%;
  overflow-x: hidden;
  color: #c5c5c5;
  background-color: #282c35;
}


  a {
      color:  #c2c2c2;
      text-decoration: underline;
      text-decoration-color: rgb(100, 100, 100);
  }
  a:hover {
      text-decoration: none;
  }

@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

#nav {
   display: flex;
   flex-direction: row;
   grid-gap: 5px;
   padding-bottom: 20px;

}

</style>
