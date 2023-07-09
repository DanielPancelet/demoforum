<template>
  <h1 style="margin:auto">Личный кабинет пользователя: {{userInfo.username}}</h1>
  <div class="page__style" >

<v-sheet :elevation="24" class="user_info">
  <h2>Данные аккаунта</h2>
<!--      <h2>Личные данные</h2>-->
<!--      <div><strong>Описание:</strong>-->
<!--        <strong>Описание:</strong>-->
        <v-table style="width: 100%;"  fixed-header>
        <thead>
      <tr>
        <th class="text-left">
          Field
        </th>
        <th class="text-left">
          Data
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="[key,value] in parseInfod"
        :key="key"
      >
        <td>{{ key }}</td>
        <td>{{ value }}</td>
      </tr>
    </tbody>

        </v-table>
</v-sheet>
    <v-sheet class="userPosts" :elevation="24">
      <h2>Активность на форуме</h2>
      <v-tabs
    fixed-tabs
      class="userContent"
  >
    <v-tab @click="changeTypePost" >
      Your Posts
    </v-tab>
    <v-tab @click="changeTypeTask">
      Your Tasks
    </v-tab>
  </v-tabs>

  <user-posts style="margin-top: 15px;"
              :userPosts="postsByUser"

              :typeOfContent="typeContent"
              v-if="!isPostLoading && typeContent"
  />

      <user-posts style="width: 100%"
              :userPosts="userTasks"
              :typeOfContent="typeContent"
                  @remove="removeTask"
                  @sort="sortTasks"
              v-else-if="!isPostLoading && !typeContent"
  />
      <div v-else>
      <v-progress-circular style="margin-top: 190px" indeterminate :size="100" :width="10" color="brown"></v-progress-circular>
    </div>

    </v-sheet>

  </div>
  <my-button style="margin: auto;margin-top: 50px" variant="outlined" @click="reAuth" >EXIT</my-button>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import UserPosts from "@/components/UserPosts.vue";
import axios from "axios";

export default {
  components: {UserPosts, MyButton},
  data(){
    return{
      userInfo: this.$store.getters.getUser,
      parseInfod: 0,
      isPostLoading:false,
      postsByUser:[],
      userTasks:[],
      typeContent:true,
    }
  },
  methods:{
    parseInfo(){
        this.parseInfod = new Map();
        this.parseInfod.set('Name',this.userInfo.name);
        this.parseInfod.set('Email',this.userInfo.email);
        this.parseInfod.set('Address',`${this.userInfo.address.city},${this.userInfo.address.street}`);
        this.parseInfod.set('Phone',`${this.userInfo.phone.split(' ')[0]}`);
        this.parseInfod.set('Website',this.userInfo.website);
    },
    reAuth(){
      if (typeof  this.$route.meta.requiresAuth != 'undefined' )
       this.$router.push('/');
       localStorage.removeItem('token',true);
       this.$store.commit('setIsAuth',false);
       this.$store.commit('setcurrentUser',{});
    },
    async fetchUserContent(){
      try{
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params:{
            userId:this.$store.getters.getUser.id,
          }
        });
        const responseTasks = await axios.get('https://jsonplaceholder.typicode.com/todos',{
          params:{
            userId:this.$store.getters.getUser.id,
          }
        });
        this.postsByUser = response.data;
        this.userTasks = responseTasks.data;
      }
      catch (e){
        alert('Some error over here!');
      } finally{
        this.isPostLoading = false;
        this.sortTasks();
      }
    },
    changeTypePost(){

      this.typeContent = true;
    },
    changeTypeTask(){
      this.typeContent = false;
    },
    removeTask(task){
      this.userTasks = this.userTasks.filter(p=>p.id!==task.id);
    },
    sortTasks(){
      setTimeout(this.sortTasks2,0.5);
    },
    sortTasks2(){
      const trueTask = this.userTasks.filter(t=>t.completed === true)
      const falseTask = this.userTasks.filter(t=>t.completed === false)
      this.userTasks = _.concat(falseTask, trueTask);
    },
  },
  mounted() {
    this.parseInfo();
    this.fetchUserContent();
  },
}
</script>

<style scoped>


.page__style{
  display: flex;

  align-items: center;
  margin-top: 5%;
  justify-content: space-around;
}
.user_info{
  margin-left: 10px;
  height: 400px;
  padding: 15px;
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.userPosts{
  height: 600px;
  padding: 15px;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1,h2{
  font-family: Roboto;
}
.userContent{
  width: 100%;
}
</style>