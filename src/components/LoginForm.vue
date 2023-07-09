<template>
  <form v-if="!isAuth" @submit.prevent>
    <h4>{{ title }}</h4>
    <h3 v-if="showError" style="color: red">Пользователь не найден!</h3>
    <my-input type="text" v-focus v-model="authToken.login" placeholder="Логин..."/>
    <my-input type="password" v-model="authToken.password" placeholder="Пароль..."/>
    <my-button color="success" type="submit" style="margin-top: 15px" @click="authorization" >Войти</my-button>
  </form>
  <div v-else style="display: flex;flex-direction: column;align-items: center;">
    <h1>Вы авторизированы!</h1>
    <my-button @click="reAuth"
               style="margin-top: 15px"
    >Выход</my-button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import axios from "axios";
export default {
  props:{
    goTo:{
      type:Boolean,
      default:false,
    },
    title:{
      type:String,
      default:'Авторизируйтесь,пожалуйcта'
    },
  },

  data(){
    return{
      showError:false,
      authToken:{
        login:'',
        password:'',
      }
    }
  },
  methods:{
     ...mapMutations({
      setIsAuth: 'setIsAuth'
    }),
    async authorization(){
       if (this.authToken.password=="1234")
       {
       try{
         const response = await axios.get('https://jsonplaceholder.typicode.com/users',{
           params:{
             username:this.authToken.login,
           }
         });
         if (response.data.length )
         {
           this.$store.commit('setIsAuth',true);
           this.$store.commit('setcurrentUser',response.data[0]);
           localStorage.setItem('token',true);
           if (this.goTo) {
             this.$router.push(`/${this.$store.getters.getUsername}`);
             this.goTo = false;
           }
           this.showError=false;
         }
         else
           this.showError = true;
       } catch (e){
           this.showError=true;
       } finally {
          this.authToken = {
          login:'',
          password:'',
          }
       }
      }
       else
         this.showError=true;
    },
    reAuth(){
      if (typeof  this.$route.meta.requiresAuth != 'undefined' )
       this.$router.push('/');
       localStorage.removeItem('token',true);
       this.$store.commit('setIsAuth',false);
       this.$store.commit('setcurrentUser',{});
    }
  },

  computed: {
    ...mapState({
      isAuth:state =>state.isAuth,
    })
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>