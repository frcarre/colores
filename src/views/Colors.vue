<template>
  <div id ="colors" class="d-flex flex-column justify-content-between">
    <header id="title" class="d-flex align-items-center justify-content-center" > {{title}}</header>

    <color-list :page = "page"/>

    <footer id="pag" class="d-flex align-items-center justify-content-between"> 
      <button type="button" class="btn btn-link"> {{ prev }} </button>
      <button type="button" class="btn btn-link">{{next}} </button>
    </footer>
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
      title: "Colores",
      prev:"< ANTERIOR",
      next:"SIGUIENTE >",
      page: 2
    }
  }
}
</script>

<style>
  #title, #pag{

    border: 1.5px solid #000000;
    border-radius: 7px;
    height: 35px;
  }

  #colors{
    height:100%;
    width: 100%;
  }
</style>
