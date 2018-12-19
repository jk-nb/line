enum GAME_STATE_ENUM{
    INIT    = 0,
    PLAY    = 1,
    FINISH  = 2
}

export default class Game{
    public state: number
    public turn: number
    public buttonMsg = ["ゲーム開始", "終了", "もう１回する"]

    constructor() {
        this.state = GAME_STATE_ENUM.INIT
        this.turn = 0
    }

    public getState(): number {
        return this.state
    }

    public getTurn(): number {
        return this.turn
    }

    public setState(state: number): void {
        this.state = state
    }

    public setTurn(turn: number): void {
        this.turn = turn
    }

    public init(): void{
        this.setState(GAME_STATE_ENUM.INIT)
        this.setTurn(1)
    }

}