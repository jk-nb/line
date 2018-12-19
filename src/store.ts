import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Game from "./models/game"
import Board from "./models/board"
import Cell from "./models/cell"

Vue.use(Vuex)

const game = new Game()
const board = new Board()

export default new Vuex.Store({
  state: {
    game: game,
    board: board
  },
  mutations: {
    changeCellStatus(state, params){
      
      if(state.board.cells[params.col-1][params.row-1].state == 0){
        console.log(state.board.cells[params.col-1][params.row-1].state)
        if(state.game.turn % 2 == 1){
          state.board.cells[params.col-1][params.row-1].state = 1
        } else {
          state.board.cells[params.col-1][params.row-1].state = 2
        }
        console.log(state.board.cells[params.col-1][params.row-1].state)

        //判定
        var winner = null
        //縦
        for(var i=0; i<state.board.lineNum; i++){
          if(state.board.cells[i][0].state == state.board.cells[i][1].state
            && state.board.cells[i][1].state == state.board.cells[i][2].state
            && state.board.cells[i][0].state != 0){
            winner = state.board.cells[i][0].state
            break;
          }
        }

        //横
        for(var i=0; i<state.board.lineNum; i++){
          if(state.board.cells[0][i].state == state.board.cells[1][i].state
            && state.board.cells[1][i].state == state.board.cells[2][i].state
            && state.board.cells[0][i].state != 0){
            winner = state.board.cells[0][i].state
            break;
          }
        }

        //斜め
        if(state.board.cells[0][0].state == state.board.cells[1][1].state
          && state.board.cells[1][1].state == state.board.cells[2][2].state
          && state.board.cells[1][1].state != 0){
          winner = state.board.cells[1][1].state
        }
        if(state.board.cells[0][2].state == state.board.cells[1][1].state
          && state.board.cells[1][1].state == state.board.cells[2][0].state
          && state.board.cells[1][1].state != 0){
          winner = state.board.cells[1][1].state
        }

        if(winner==null){
          state.game.turn++
        } else {
          alert("Player" + winner + "の勝ち")
          state.game.state = 2
        }
      }
      
    },
    changeGameState(state){
      
      switch(state.game.state){
        case 0:
          state.game.state = 1
          break
        case 1:
          state.game.state = 2
          break
        case 2:
          state.board = new Board()
          state.game = new Game()
          break
      }
      
    }
  },
  actions: {

  }
})