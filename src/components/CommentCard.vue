<template>
<!--  <div class="post" >-->
<!--  <h1>{{comm.id}}</h1>-->
<!--  </div>-->
  <v-card class="post">
     <v-card-item>
       <template v-slot:prepend>
       <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
          </template>
        <v-card-title>{{comm.email}}</v-card-title>

        <v-card-subtitle>{{comm.name}}</v-card-subtitle>
      </v-card-item>
    <v-card-item>
       <v-card-text class="text-h5 py-2">
      {{comm.body}}
    </v-card-text>
      <v-card-actions>
        <v-btn>Like</v-btn>
        <v-btn>Dislike</v-btn>
      </v-card-actions>
    </v-card-item>

  </v-card>

</template>

<script>
export default {
  props: {
    comm:{
          type:Object,
          required:true
        }
      },

}
</script>

<style  scoped>
.post{
  //padding:15px;
  border:3px solid orangered;
  max-width: 800px;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: space-between;
}
</style>