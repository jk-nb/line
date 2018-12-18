import { Cell } from './cell'

export module Board {
    var lineNum = 3
    
    export declare type T = {
        turn:       number,
        lineNum:    number,
        cells:      Cell.T[][]
    }

    export var init = (): T => {
        var cells: Cell.T[][] = new Array()
        for ( var i = 0; i < lineNum; i++ ) {
            cells[i] = new Array()
            for ( var j = 0; j < lineNum; j++ ) {
                cells[i][j] = Cell.empty(i,j)
            }
        }
        return {
            turn: 1,
            lineNum: lineNum,
            cells: cells
        }
    }
}