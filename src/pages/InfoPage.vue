<template>
  <div class="main">
    <h1>Страница с постами пользователей</h1>
    <post-list
        :posts = "posts" :users="users"
        v-if="!isPostLoading"
    />
    <div v-else>
      <v-progress-circular style="margin-top: 300px" indeterminate :size="128" :width="12" color="brown"></v-progress-circular>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components:{
    PostList
  },
  data(){
    return{
      posts:[],
      users:[],
      isPostLoading:false,
      selectedSort:'',
      sortOptions:[
        {value:'title',name:'По названию'},
        {value:'body',name:'По содержанию'},
      ],
    }
  },
  methods:{
    async fetchPosts(){
      try{
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const responseUsers = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.posts = response.data;
        this.users = responseUsers.data;
      }
      catch (e){
        alert('Some error over here!');
      } finally{
        this.isPostLoading = false;
      }
    }
  },
  mounted(){
    this.fetchPosts();
  },
  //СОРТИРОВКА ПОСТОВ
  computed:{
    sortedPosts(){
      return [...this.posts].sort()
    }
  }
}
</script>

<style scoped>
.main{
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>