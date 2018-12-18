import Vue from 'vue'
import Vuex from 'vuex'
import { Board, Cell} from './models'

Vue.use(Vuex)

const board = Board.init()

export default new Vuex.Store({
  state: {
    board: board,
    cell: Cell
  },
  mutations: {
    changeCellStatus(state, params){
      if(state.board.cells[params.col-1][params.row-1].state == Cell.CELL_ENUM.NONE){
        if(state.board.turn % 2 == 1){
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
            alert("Player" + winner + "の勝ち")
            break;
          }
        }

        //横
        for(var i=0; i<state.board.lineNum; i++){
          if(state.board.cells[0][i].state == state.board.cells[1][i].state
            && state.board.cells[1][i].state == state.board.cells[2][i].state
            && state.board.cells[0][i].state != Cell.CELL_ENUM.NONE){
            winner = state.board.cells[0][i].state
            alert("Player" + winner + "の勝ち")
            break;
          }
        }

        //斜め
        if(state.board.cells[0][0].state == state.board.cells[1][1].state
          && state.board.cells[1][1].state == state.board.cells[2][2].state
          && state.board.cells[0][i].state != Cell.CELL_ENUM.NONE){
          winner = state.board.cells[1][1].state
          alert("Player" + winner + "の勝ち")
        }

        if(winner==null){
          state.board.turn++
        }
      }
    },
  },
  actions: {

  }
})