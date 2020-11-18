<template>
  <div id="color-list" class="d-flex flex-wrap justify-content-between">
      <div @click="copyToClipboard(color.color), showConfirmation" v-for="color in colors" :key="color.id" 
        class="d-flex 
              flex-column 
              justify-content-between 
              color-card my-1">
        <div class="align-self-start mt-1 ml-2" >{{ color.year }}</div>
        <div>
          <p class="m-0">{{ color.name }}</p>
          <p class="font-weight-bold" > {{ color.color }} </p>
        </div>
        <div class="align-self-end mb-1 mr-2">{{ color.pantone_value}}</div>
      </div>
    </div>
  
</template>
  
<script>
import axios from "axios";
export default {
  name: "ColorList",
  props:["currentPage"],
  data() {
    return {
      page_prefix: "?page=",
      colors: [],
      totalPages:0,
    };
  },
  methods: {
    getColors: function() {
      const path =
        "https://reqres.in/api/colors" + (this.currentPage == 1 ? "" : this.page_prefix + this.currentPage );
      axios
        .get(path)
        .then(response => {
          this.colors = response.data.data;
          this.totalPages = response.data.total_pages;
        })
        .catch(error => {
          console.log(error);
        });
    },
    copyToClipboard: function(color){

      var dummyInput = document.createElement("input");    
      document.body.appendChild(dummyInput);

      dummyInput.setAttribute("id", "dummy-input")
      document.getElementById("dummy-input").value = color
      dummyInput.select();
      document.execCommand("copy");
      document.body.removeChild(dummyInput);
    }
    
  },
  created: function() {
    this.getColors();
  },
  watch:{
    totalPages:function(){
      this.$emit("total-pages", this.totalPages)
    }
  }
};
</script>

<style>
#color-list{
  height: 100%;
}
#color-list > *{
  flex: 0 0 33%;

}
.color-card{
  border: 1px solid #000000;
  background-color: #dddddd;
  border-radius:  10px;


}


</style>
