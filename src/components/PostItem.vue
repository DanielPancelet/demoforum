<template>

  <v-card
  class="mx-auto post" @click="$router.push(`/blogs/${post.id}`)">
    <v-card-item>
      <div>

<!--        <div @click.stop style="margin-left: 15px;background-color: orangered;display: inline-block;padding: 0px 5px 0px 5px;color: white;border-radius: 10px;">-->
<!--           <span class=" text-h7 font-italic" >Пост от: </span>-->
<!--          <span class="font-weight-bold"-->
<!--      > {{user}}</span>-->
<!--        </div>-->

        <v-sheet v-if="!specialType"  class="text-none" style="margin-left: 15px;
        background-color: orangered;padding: 0px 6px 0px 6px;display: inline-block;color: white;border-radius: 10px;">
          <span class=" text-h7 font-italic">Пост от: </span>
<!--          <v-btn  @click.stop class="text-none" variant="text" style="background-color: orangered;margin-bottom: 2px;"-->
      <span class="text-none">{{user}}</span>
<!--          </v-btn>-->
        </v-sheet>



        <div class="text-h5  font-weight-black mb-1">
          {{ post.title }}
        </div>
      </div>
      <div class=" text-h6">
        {{post.body}}
      </div>


    </v-card-item>

    <v-card-actions v-if="!specialType  && user!=$store.getters.getUsername" style="align-self: flex-end;margin-right: 100px">


    <v-btn @click.stop="likePost" >
      <v-icon :icon="like" size="large" ></v-icon>
    </v-btn>
    <v-btn @click.stop="dislikePost"  >
      <v-icon :icon="dislike" size="large" ></v-icon>
    </v-btn>

<!--      <v-btn variant="outlined" @click.stop>-->
<!--        Like-->
<!--      </v-btn>-->
<!--      <v-btn variant="outlined" @click.stop>-->
<!--        Dislike-->
<!--      </v-btn>-->

    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  data(){
    return {
      like: "mdi-thumb-up-outline",
      dislike:"mdi-thumb-down-outline",
    }
  },
  props:{
    post:{
      type:Object,
      required:true,
    },
    user:{
      type:String,
    },
    specialType:{
      type:Boolean,
      default:false,
    }
  },
  methods:{
    likePost(){
      if (this.dislike.includes('outline'))
      this.like="mdi-thumb-up";
    },
    dislikePost(){
      if (this.like.includes('outline'))
      this.dislike="mdi-thumb-down";
    }
  }
}
</script>

<style scoped>
.post{
  //padding:15px;
  border:3px solid orangered;
  max-width: 1000px;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: space-between;

}
.post__buttons{
  min-width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
 margin-left: 15px;
 justify-content: space-between;
}
</style>