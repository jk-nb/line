import Cell from "./cell"
import CELL_ENUM from "./cell"
export default class Board{
    public lineNum: number
    public cells: Cell[][]

    constructor(lineNum: number = 3) {
        this.lineNum = lineNum
        this.cells = this.init()
    }

    public getLineNum(): number {
        return this.lineNum
    }

    public getCells(): Cell[][] {
        return this.cells
    }

    public setLineNum(lineNum: number){
        this.lineNum = lineNum
    }

    public setCells(row:number, col:number, state:CELL_ENUM){
        this.cells[row][col] = new Cell()
    }

    public init() : Cell[][]{
        var cells: Cell[][] = new Array()
        for ( var i = 0; i < this.lineNum; i++ ) {
            cells[i] = new Array()
            for ( var j = 0; j < this.lineNum; j++ ) {
                cells[i][j] = new Cell()
            }
        }
        return cells
    }
}