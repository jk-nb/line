<template>
  <div id="start-button">
    <button v-on:click="click()">{{msg}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import store from './../store'

@Component
export default class StartButton extends Vue {
  public click(){
    store.commit('changeGameState',{})
  }

  get msg(): string {
    return store.state.game.buttonMsg[store.state.game.state]
  }

}
</script>

<style scoped>
#start-button{
    margin-top:30px;
}
</style>