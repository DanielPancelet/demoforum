<template>
  <div class="navbar">
    <div @click="$router.push('/')" style="font-weight:bold;font-size: 30px;" >Business Forum  <v-icon icon="mdi-home" size="small"></v-icon></div>


    <div class="navbar__btns" >
      <my-button style="margin-left: 20px;font-size: 14px" @click="showDialog" >Authorization</my-button>
      <my-button style="margin-left: 20px;" @click="$router.push('/blogs')" >Blogs</my-button>
<!--      <my-button style="margin-left: 20px;" @click="showPrPage" >Private</my-button>-->
      <my-button ref='privatePage' style="margin-left: 20px;" @click="showPrivatePage" >Profile</my-button>
    </div>
    <my-dialog v-model:show="authDialogVisible"  v-model:reMove="goToPrivate">


      <login-form  v-model:title="logTitle" :goTo="goToPrivate"/>

    </my-dialog>
  </div>
</template>

<script>
import router from "@/router/index";
import LoginForm from "@/components/LoginForm.vue"
import {mapGetters} from 'vuex'
export default {
  components:{
    LoginForm
  },
  name:'nav-bar',
  data(){
    return {
      authDialogVisible:false,
      logTitle: 'Авторизируйтесь,пожалуйcта',
      goToPrivate:false
    }
  },
  methods:{
    showPrPage(){
      if (this.$store.getters.getAuth)
        this.$router.push('/private');
    },
    showDialog(){
      this.logTitle = 'Авторизируйтесь,пожалуйcта';
      this.authDialogVisible = true;
    },
    showPrivatePage() {

      if (this.$store.getters.getAuth)
        this.$router.push(`/${this.$store.getters.getUsername}`);
        //console.log('gde');

      else {
        this.goToPrivate = true;
        this.showDialog();
        this.logTitle = "Для доступа к этой странице нужно авторизироваться";
      }
    }
  }
}
//@click="$router.push('/privateinfo')"
</script>

<style  scoped>
.navbar{
  height:50px;
  background-color: chocolate;
  box-shadow: 2px 2px 4px gray;
  display:flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns{
  margin-left: auto;

  display: flex;
  height: 40px;
  justify-content: space-between;
}

</style>