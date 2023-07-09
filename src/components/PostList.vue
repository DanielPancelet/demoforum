<template>
  <div v-if="posts.length>0" >
    <h3 style="margin-left: 10px" >Список постов:</h3>
    <transition-group name="post-list">
    <post-item
    class="post"
    v-for = "post in posts"
    :post="post"
    :user="getUsername(post.userId)"
    :key="post.id"
    />
      </transition-group>
  </div>
  <div v-else >
    <h3 style="color:red">Some information</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
components:{PostItem},
  props:{
    posts:{
    type:Array,
    },
    users:{
      type:Array,
      required:true,
    }
  },
  methods:{
    getUsername(id){
      const ans = this.users.find(item => item.id == id);
      return ans.username;
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 1s ease;
}
</style>