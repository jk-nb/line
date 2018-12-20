import Cell from "./cell"
export default class Board{
    lineNum: number
    cells!: Cell[][]

    constructor(lineNum: number = 3) {
        this.lineNum = lineNum
        this.createCells()
    }

    createCells() : void {
        var cells: Cell[][] = new Array()
        for ( var i = 0; i < this.lineNum; i++ ) {
            cells[i] = new Array()
            for ( var j = 0; j < this.lineNum; j++ ) {
                cells[i][j] = new Cell()
            }
        }
        this.cells = cells
    }

    init(): void {
        this.cells.forEach(cells => 
          cells.forEach(v => v.init())
        )
      }

}