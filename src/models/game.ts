import { Enums } from "./../modules/enums/enum"

export default class Game{
    private _state: number
    private _turn: number
    private _buttonMsg = ["ゲーム開始", "終了", "もう１回する"]

    constructor() {
        this._state = Enums.GAME_STATE_ENUM.INIT
        this._turn = 1
    }

    get state(): number {
        return this._state
    }

    get turn(): number {
        return this._turn
    }

    set state(state: number){
        this._state = state
    }

    set turn(turn: number){
        this._turn = turn
    }

    get buttonMsg(): string{        
        return this._buttonMsg[this.state]
    }

    public incrementTurn(): void{
        this._turn++;
    }

    public init(): void{
        this._state = Enums.GAME_STATE_ENUM.INIT
        this._turn = 1
    }

}