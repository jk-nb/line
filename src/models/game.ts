import { Enums } from "./../modules/enums/enum"
import Board from "./board"

export default class Game{
    state!: number
    turn!: number
    board!: Board
    buttonMsg = ["ゲーム開始", "終了", "もう１回する"]

    constructor() {
        this.init()
    }

    public incrementTurn(): void{
        this.turn++;
    }

    public init(): void{
        this.state = Enums.GAME_STATE_ENUM.INIT
        this.turn = 1
        this.board = new Board()
    }
}