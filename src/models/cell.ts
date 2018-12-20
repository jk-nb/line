import { Enums } from "./../modules/enums/enum"

export default class Cell{
    private _state: number

    constructor() {
        this._state = Enums.CELL_ENUM.NONE
    }

    get state(): number{
        return this._state
    }

    set state(state: number){
        this._state = state
    }
}