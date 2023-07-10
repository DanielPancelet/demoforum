<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  methods:{
    removeToken(){
    localStorage.removeItem('token',true);
    },
    testLodash(){
      const array = [1];
      const other = _.concat(array, 2, [3], [[4]]);
      // console.log(other)
    }
  },
  mounted() {
    this.removeToken();
    this.testLodash();
  }
}

</script>

<style >
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.app{
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
