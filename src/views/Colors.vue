<template>
  <div id ="colors" class="d-flex flex-column justify-content-between">
    <header id="title" class="d-flex align-items-center justify-content-center" > <h3 class="m-0 font-weight-bold">{{title}}</h3></header>

    <color-list :key= "currentPage" :currentPage = "currentPage" @total-pages ="getTotalPages"/>

    <footer id="pag" class="d-flex align-items-center justify-content-between"> 
      <button type="button" @click="pageControl(0)" class="btn btn-link text-decoration-none"> {{ prev }} </button>
      <button type="button" @click="pageControl(1)" class="btn btn-link text-decoration-none">{{next}} </button>
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
      prev:"",
      next:"Siguiente >",
      currentPage: 1,
      totalPages: 0,
    }
  },
  methods:{
    pageControl: function(flow){
      if (flow == 0){
        if (this.currentPage > 1){
          this.currentPage --;
        }
        if (this.currentPage == 1){
          this.prev=""
          if (this.next==""){
            this.next="Siguiente >"
          }
        }

      }
      else if (flow == 1){
        if (this.currentPage < this.totalPages){
          this.currentPage ++;
        }
        if (this.currentPage == this.totalPages){
          this.next=""
          if (this.prev==""){
            this.prev="< Anterior"
          }
        }
      }
    },
    getTotalPages: function(p){
      this.totalPages= p;

    }
  }
}
</script>

<style scoped>
  .btn{
    color: #000000;
  }

  .btn:focus,.btn:active {
    outline: none !important;
    box-shadow: none;
  }

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
