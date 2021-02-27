<template>
  <html id="app" class="darkmode">
    <div id="nav">
      <a href="/#/crypto"></a>
    </div>
    <router-view/>
    <title>Sysnomid Vue Experiments</title>
    <br />
  </html>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');
@import url('https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css');

html { 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
  margin-bottom: 4%;
  overflow-x: hidden;
  color: #c5c5c5; 
  background-color: #282c35; 
  font-family: 'Inter', sans-serif ;
}
a {
  color: #c5c5c5; 
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
  margin: 0 auto;
   display: flex;
   flex-direction: row;
   grid-gap: 5px;
   gap: 5px;
}
</style>
