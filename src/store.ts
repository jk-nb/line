import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { Board, Cell, Game} from './models'

Vue.use(Vuex)

const game = Game.init()
const board = Board.init()

export default new Vuex.Store({
  state: {
    game: game,
    board: board,
    cell: Cell
  },
  mutations: {
    changeCellStatus(state, params){
      if(state.board.cells[params.col-1][params.row-1].state == Cell.CELL_ENUM.NONE){
        if(state.game.turn % 2 == 1){
          state.board.cells[params.col-1][params.row-1].state = Cell.CELL_ENUM.FIRST
        } else {
          state.board.cells[params.col-1][params.row-1].state = Cell.CELL_ENUM.SECOND
        }

        //判定
        var winner = null
        //縦
        for(var i=0; i<state.board.lineNum; i++){
          if(state.board.cells[i][0].state == state.board.cells[i][1].state
            && state.board.cells[i][1].state == state.board.cells[i][2].state
            && state.board.cells[i][0].state != Cell.CELL_ENUM.NONE){
            winner = state.board.cells[i][0].state
            break;
          }
        }

        //横
        for(var i=0; i<state.board.lineNum; i++){
          if(state.board.cells[0][i].state == state.board.cells[1][i].state
            && state.board.cells[1][i].state == state.board.cells[2][i].state
            && state.board.cells[0][i].state != Cell.CELL_ENUM.NONE){
            winner = state.board.cells[0][i].state
            break;
          }
        }

        //斜め
        if(state.board.cells[0][0].state == state.board.cells[1][1].state
          && state.board.cells[1][1].state == state.board.cells[2][2].state
          && state.board.cells[1][1].state != Cell.CELL_ENUM.NONE){
          winner = state.board.cells[1][1].state
        }
        if(state.board.cells[0][2].state == state.board.cells[1][1].state
          && state.board.cells[1][1].state == state.board.cells[2][0].state
          && state.board.cells[1][1].state != Cell.CELL_ENUM.NONE){
          winner = state.board.cells[1][1].state
        }

        if(winner==null){
          state.game.turn++
        } else {
          alert("Player" + winner + "の勝ち")
          state.game.state = Game.GAME_STATE_ENUM.FINISH
        }
      }
    },
    changeGameState(state){
      switch(state.game.state){
        case Game.GAME_STATE_ENUM.INIT:
          state.game.state = Game.GAME_STATE_ENUM.PLAY
          break
        case Game.GAME_STATE_ENUM.PLAY:
          state.game.state = Game.GAME_STATE_ENUM.FINISH
          break
        case Game.GAME_STATE_ENUM.FINISH:
          state.board = Board.init()
          state.game = Game.init()
          break
      }
    }
  },
  actions: {

  }
})