<template>
  <div id="app">
    <Board/>
    <StartButton/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Board from './components/Board.vue'
import StartButton from './components/StartButton.vue'

@Component({
  components: {
    Board,
    StartButton
  },
})
export default class App extends Vue {}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
