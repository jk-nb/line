<template>
  <div id="board">
    <div>
      ターン：{{turn}}
    </div>
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
import Cell from './Cell.vue';

@Component({
  computed:{
    lineNum: function () {
      return store.state.board.lineNum
    },
    turn(): Number{
      return store.state.game.turn
    }
  },
  components: {
    Cell,
  }
})
export default class Board extends Vue {}
</script>

<style scoped>
#board{
  text-align: -webkit-center;
}
</style>
