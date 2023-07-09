<template>
  <div>
    <div class="taskCard" :class={done:task.completed}>
      <div style="display: flex;align-items: center;"><input type="checkbox" id="checkbox" @click="$emit('sort')" v-model="task.completed">
      <h5 style="margin-left: 10px" :class={strikeout:task.completed}>{{task.title}}</h5>
      </div>
        <v-icon @click="$emit('remove',task)" icon="mdi-delete" style="align-self: flex-end;color: darkred" >
        </v-icon>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props:{
    task:{
      type:Object,
      required:true,
    }
  },
  methods:{
  }
}

</script>

<style scoped>
.strikeout{
  text-decoration: line-through;

}
.done{
   background-color: grey;
}
.taskCard{
  margin-top: 10px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border:1px solid black;
  border-radius: 10px;
}
</style>