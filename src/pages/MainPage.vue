<template>
  <div class="page__style">
  <div style="display: flex;flex-direction: column;align-items: center">
    <h1 style="margin-top: 15px;">Business gallery</h1>

    <v-carousel style="width:600px;margin-top: 100px" v-if="!isPostLoading"
    cycle
    hide-delimiter-background
                hide-delimiters
                progress="primary"
    show-arrows="hover">
<v-carousel-item
    v-for="photo in photos"
    :key="photo.id"
    :src="photo.url"
    :title="photo.title"
    cover
  >
 </v-carousel-item>


    </v-carousel>

<div v-else>
      <v-progress-circular style="margin-top: 300px" indeterminate :size="100" :width="10" color="brown"></v-progress-circular>
    </div>
</div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      title:'t',
      photos:[],
      albumId:1,
      count:0,
      isPostLoading:false,
    }
  },
  methods: {
    async fetchCount() {
      try {
        this.isPostLoading= true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        this.count = response.data.length;
      } catch (e) {
        alert('Some error over here!');
      } finally {
        this.albumId = Math.floor(Math.random() * (this.count - 1) + 1);
      } try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos',{
          params:{
            albumId:this.albumId,
          }
        });
        this.photos = response.data;
      } catch (e) {
        alert('Some error over here!');
      } finally {
        this.isPostLoading= false;
      }
    },

  },
  mounted() {
  this.fetchCount()
  },

}
</script>

<style  scoped>
.page__style{

}
</style>