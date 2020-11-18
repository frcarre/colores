<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

html, body{ 
  height:100%;
  width:100%;
  overflow: hidden;
}



#app {
  font-family: 'Roboto Medium', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}


@import'~bootstrap/dist/css/bootstrap.css'

</style>
