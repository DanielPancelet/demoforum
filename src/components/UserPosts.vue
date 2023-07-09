<template>
  <div v-if="userPosts.length>0" >
    <v-virtual-scroll
        style="border-radius: 2px;padding: 0px 10px 5px 10px"
    :items="[1]"
     height="470"

    >
      <transition-group name="post-list">
    <post-item v-if="typeOfContent"
    class="post"
    v-for = "post in userPosts"
               :specialType="typeOfContent"
    :post="post"
    :key="post.id"
    />
      <todo-card v-else
      v-for = "task in userPosts"

       :task="task"
        :key="task.id"
        @sort="$emit('sort')"
                 @remove="$emit('remove',task)"
      />
         </transition-group>
      </v-virtual-scroll>
  </div>
  <div v-else-if="!typeOfContent" style="display: flex;align-items: center;flex-direction: column;margin-top: 210px">
    <h3 style="color:orange;">
    No tasks</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import TodoCard from "@/components/TodoCard.vue";
export default {
  components: {TodoCard, PostItem},
  data(){
    return{
    }
  },
  props: {
    userPosts: {
      type: Array,
      required:false,
    },
    typeOfContent:{
      type:Boolean,
      default:true,
    }
  },
  mounted() {
   // console.log(this.userPosts)
  }
}
</script>

<style  scoped>
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
  transition: transform 0.8s ease;
}
</style>