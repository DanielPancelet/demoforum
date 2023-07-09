<template>
  <div style="display: flex;align-items: center;flex-direction: column">
  <h1>Комментарии поста:</h1>
    <div class="comlist" >
      <comment-card
          v-for="comm in comms"
          :comm="comm"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentCard from "@/components/CommentCard.vue";

export default {
  components: {CommentCard},
  data(){
    return{
    isCommsLoading:false,
      comms:[],
    }
  },
  methods:{
    async fetchComments(){
        try{
          this.isCommsLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/comments',{
            params:{
                postId:this.$route.params.id,
            }
          });
          this.comms = response.data;
        } catch (e){
          console.log(e)
        } finally {
          this.isCommsLoading = false;
        }
    }
  },
  mounted() {
    this.fetchComments()
  }
}
</script>

<style  scoped>

</style>