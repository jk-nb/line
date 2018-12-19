<template>
  <div id="start-button">
    <button v-on:click="click()">{{msg}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import store from './../store'
import { Game } from '@/models';

export default {
  computed:{
    msg(): string{
      return Game.buttonMsg[store.state.game.state]
    }
  },
  props: {

  },
  methods:{
    click(){store.commit('changeGameState',{})}
  }
}
</script>

<style scoped>
#start-button{
    margin-top:30px;
}
</style>