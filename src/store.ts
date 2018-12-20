import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Game from "./models/game"
import Board from "./models/board"
import { Enums } from "./modules/enums/enum"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    game: new Game()
  },
  mutations: {
    changeCellStatus(state, params){
      //石が置かれていない場合
      if(state.game.board.cells[params.col-1][params.row-1].state == Enums.CELL_ENUM.NONE){        
        //セルの状態変更
        if(state.game.turn % 2 == 1){
          state.game.board.cells[params.col-1][params.row-1].state = Enums.CELL_ENUM.FIRST
        } else {
          state.game.board.cells[params.col-1][params.row-1].state = Enums.CELL_ENUM.SECOND
        }

        //判定
        var winner = null
        //縦
        for(var i=0; i<state.game.board.lineNum; i++){
          if(state.game.board.cells[i][0].state == state.game.board.cells[i][1].state
            && state.game.board.cells[i][1].state == state.game.board.cells[i][2].state
            && state.game.board.cells[i][0].state != Enums.CELL_ENUM.NONE){
            winner = state.game.board.cells[i][0].state
            break;
          }
        }

        //横
        for(var i=0; i<state.game.board.lineNum; i++){
          if(state.game.board.cells[0][i].state == state.game.board.cells[1][i].state
            && state.game.board.cells[1][i].state == state.game.board.cells[2][i].state
            && state.game.board.cells[0][i].state != Enums.CELL_ENUM.NONE){
            winner = state.game.board.cells[0][i].state
            break;
          }
        }

        //斜め
        if(state.game.board.cells[0][0].state == state.game.board.cells[1][1].state
          && state.game.board.cells[1][1].state == state.game.board.cells[2][2].state
          && state.game.board.cells[1][1].state != Enums.CELL_ENUM.NONE){
          winner = state.game.board.cells[1][1].state
        }
        if(state.game.board.cells[0][2].state == state.game.board.cells[1][1].state
          && state.game.board.cells[1][1].state == state.game.board.cells[2][0].state
          && state.game.board.cells[1][1].state != Enums.CELL_ENUM.NONE){
          winner = state.game.board.cells[1][1].state
        }

        if(winner==null){
          state.game.incrementTurn()
        } else {
          alert("Player" + winner + "の勝ち")
          state.game.state = Enums.GAME_STATE_ENUM.FINISH
        }
      } else {
        alert("ここに石は置けません")
      }
      
    },
    changeGameState(state){
      switch(state.game.state){
        case Enums.GAME_STATE_ENUM.INIT:
          state.game.state = Enums.GAME_STATE_ENUM.PLAY
          break
        case Enums.GAME_STATE_ENUM.PLAY:
          state.game.state = Enums.GAME_STATE_ENUM.FINISH
          break
        case Enums.GAME_STATE_ENUM.FINISH:
          state.game.init()
          break
      }
      
    }
  },
  actions: {

  }
})