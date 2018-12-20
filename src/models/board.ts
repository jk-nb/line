import Cell from "./cell"
export default class Board{
    private _lineNum: number
    private _cells: Cell[][]

    constructor(lineNum: number = 3) {
        this._lineNum = lineNum
        this._cells = this.init()
    }

    get lineNum(): number {
        return this._lineNum
    }

    get cells(): Cell[][] {
        return this._cells
    }

    set lineNum(lineNum: number){
        this._lineNum = lineNum
    }

    public init() : Cell[][]{
        var cells: Cell[][] = new Array()
        for ( var i = 0; i < this._lineNum; i++ ) {
            cells[i] = new Array()
            for ( var j = 0; j < this._lineNum; j++ ) {
                cells[i][j] = new Cell()
            }
        }
        return cells
    }

    public getCell(row:number, col:number){
        return this._cells[row][col]
    }
}