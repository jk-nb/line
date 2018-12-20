<template>
  <div id="board">
    <div>ターン：{{turn}}</div>
    <div>
      <table>
        <tr v-for="i in lineNum" :key="i">
          <td v-for="j in lineNum" :key="j">
            <Cell
              :col = i
              :row = j
            ></Cell>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from './../store'
import m_Cell from './../models/cell'
import Cell from './Cell.vue';

@Component({
  components: {
    Cell,
  }
})
export default class Board extends Vue {
  get lineNum(): number {
    return store.state.board.lineNum
  }
  get turn(): number {
    return store.state.game.turn
  }

}
</script>

<style scoped>
#board{
  text-align: -webkit-center;
}
</style>
