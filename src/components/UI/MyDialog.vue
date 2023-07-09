<template>
  <div class = "dialog" v-if="show" @click.stop = "hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'my-dialog',
  props:{
    show:{
      type:Boolean,
      default:false,
    }
  },
  methods:{

    hideDialog(){
      this.$emit('update:show',false);
      this.$emit('update:reMove',false)
    }
  }
}
</script>

<style scoped>
.dialog{
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}
.dialog__content{
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>