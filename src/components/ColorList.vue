<template>
  <div id="color-list" class="d-flex flex-wrap justify-content-between">
      <div v-for="color in colors" :key="color.id" 
        class="d-flex 
              flex-column 
              justify-content-between 
              color-card my-1">
        <div class="align-self-start" >{{ color.year }}</div>
        <div>
          <p>{{ color.name }}</p>
          <p> {{ color.color }} </p>
        </div>
        <div class="align-self-end">{{ color.pantone_value}}</div>
      </div>
    </div>
  
</template>
  
<script>
import axios from "axios";
export default {
  name: "ColorList",
  props:["page"],
  data() {
    return {
      page_prefix: "?page=",
      colors: []
    };
  },
  methods: {
    getColors: function() {
      const path =
        "https://reqres.in/api/colors" + (this.page == 1 ? "" : this.page_prefix + this.page );

      console.log(path)
      axios
        .get(path)
        .then(response => {
          this.colors = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created: function() {
    this.getColors();
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
