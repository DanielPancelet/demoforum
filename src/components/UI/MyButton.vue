<template>
<!--  <button class="btn">-->
<!--    <slot></slot>-->
<!--  </button>-->
  <v-btn class="btn">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'my-button',

}
</script>

<style  scoped>
.btn{
  padding: 5px 5px ;
  background: darkorange;
  border-radius: 10px;
  min-width: 100px;
  height: 40px;
  border:2px solid darkgoldenrod;
}
</style>