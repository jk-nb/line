export enum CELL_ENUM {
    NONE    = 0,
    FIRST   = 1,
    SECOND  = 2,
}

export default class Cell{
    public state: number

    constructor() {
        this.state = CELL_ENUM.NONE
    }

    public getState(){
        return this.state
    }

    public setLineNum(state: number){
        this.state = state
    }

}