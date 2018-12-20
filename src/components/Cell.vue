<template>
  <div class="cell" v-on:click="putStone(col, row)">
    {{state}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Enums } from "./../modules/enums/enum"
import store from './../store'

@Component
export default class Cell extends Vue {
  @Prop() col!: number
  @Prop() row!: number

  get state(): number {
    return store.state.game.board.cells[this.col-1][this.row-1].state
  } 

  public putStone(i: number, j: number){
    switch(store.state.game.state){
      case Enums.GAME_STATE_ENUM.INIT:
        alert("ゲームが始まっていません")
        break
      case Enums.GAME_STATE_ENUM.PLAY:
        store.commit('changeCellStatus',{
          col: i,
          row: j
        })
        break
      case Enums.GAME_STATE_ENUM.FINISH:
          alert("ゲームが終了しています")
        break
    }
  }
}

</script>

<style scoped>
.cell{
    background:#14bdac;
    width:100px;
    height:100px;
    text-align:center;
    vertical-align:middle;
    display: table-cell;
    vertical-align: middle;
    font-size: 30px;
}
</style>