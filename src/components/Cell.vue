<template>
  <div class="cell" v-on:click="putStone(col, row)">
    {{state}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Cell  from './../model/cell.vue'
import board from './Board.vue'
import store from './../store'
import { Game } from '@/models';

export default {
  computed:{
    state(): Number{
      return store.state.board.cells[(this as any).col-1][(this as any).row-1].state
    }
  },
  props: {
    col: Number,
    row: Number
  },
  methods:{
    putStone(i: number, j: number){
      switch(store.state.game.state){
        case Game.GAME_STATE_ENUM.INIT:
            alert("ゲームが始まっていません")
          break
        case Game.GAME_STATE_ENUM.PLAY:
          store.commit('changeCellStatus',{
            col: (this as any).col,
            row: (this as any).row
          })
          break
        case Game.GAME_STATE_ENUM.FINISH:
            alert("ゲームが終了しています")
          break
      }
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