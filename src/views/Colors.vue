<template>
  <div id ="colors" class="d-flex flex-column justify-content-between">
    <header id="title" > {{title}} </header>

    <color-list/>

    <footer id="pag"> ANTERIOR - SIGUIENTE</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorList from "@/components/ColorList.vue"

export default {
  name: 'Colors',
  components: {
    ColorList
  },
  data(){
    return{
      title: "COLORES"
    }
  }
}
</script>

<style scoped>
  #title, #pag{
    border: 1.5px solid #000000;
    border-radius: 7px;
  }

  #colors{
    height:100%;
    width: 100%;
  }
</style>
