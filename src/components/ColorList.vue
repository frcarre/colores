<template>
  <div id="color-list" class="d-flex flex-wrap justify-content-between">
    <div v-for="color in colors" :key="color.id" class="d-flex flex-column card">
      <div>{{ color.year }}</div>
      <div>{{ color.name }}</div>
      <div>{{ color.color }}</div>
      <div>{{ color.pantone_value}}</div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ColorList",
  data() {
    return {
      page: 2,
      page_prefix: "?page=",
      colors: []
    };
  },
  methods: {
    getColors: function() {
      const path =
        "https://reqres.in/api/colors" + this.page_prefix + this.page;
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
.card{
  
  border: 1px solid #000000;
  background-color: #dddddd;
  border-radius:  10px;


}


</style>
