<template>
  <div id ="colors" class="d-flex flex-column justify-content-between">
    <header id="title" class="d-flex align-items-center justify-content-center" > <h3 class="m-0 font-weight-bold">{{title}}</h3></header>

    <div v-if="color.id != undefined"
         id ="copy-confirm" 
         class="d-flex 
              flex-column 
              justify-content-between 
              my-1">
      <div class="align-self-start mt-1 ml-2" >{{ color.year }}</div>
       <h1>¡COPIADO!</h1>
    <div class="align-self-end mb-1 mr-2">{{ color.pantone_value}}</div> 
    </div>

    <color-list v-else :key= "currentPage" :currentPage = "currentPage" @total-pages ="getTotalPages" @confirm-copy ="confirmCopy" />

    <footer id="pag" class="d-flex align-items-center justify-content-between"> 
      <button type="button" @click="pageControl('p')" class="btn btn-link text-decoration-none"> {{ prev }} </button>
      <button type="button" @click="pageControl('n')" class="btn btn-link text-decoration-none">{{next}} </button>
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
      color: {},
    }
  },
  methods:{
    pageControl: function(flow){
      if (flow == 'p'){
        if (this.color.id != undefined){
          this.color = {}
          this.title = "Colores"
          
        }
        if (this.currentPage > 1){
          this.currentPage --;
        }
      }
      else if (flow == 'n'){
        if (this.currentPage < this.totalPages){
          this.currentPage ++;
        }
      }

      this.showNavBtns();
    },
    showNavBtns: function(){
      if (this.next==""){
        this.next="Siguiente >"
      }
      if (this.prev==""){
          this.prev="< Anterior"
      }
      if (this.currentPage == 1){
          this.prev=""
      }
      if (this.currentPage == this.totalPages){
        this.next=""
      }
      if (this.color.id != undefined){
        this.prev ="< Volver";
        this.next =""
      }
    },
    getTotalPages: function(p){
      this.totalPages= p;
    },
    confirmCopy: function(c){
      this.color = c;
      this.showNavBtns();
      this.title = c.name + ' - ' + c.color
    }
  }
}
</script>

<style scoped>
  #copy-confirm{
    border: 1px solid #000000;
    background-color: #dddddd;
    border-radius:  10px;
    z-index: 100;
    height:100%;
    width:100%
  }

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
