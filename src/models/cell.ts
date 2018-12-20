import { Enums } from "./../modules/enums/enum"

export default class Cell{
    state!: number

    constructor() {
        this.init()
    }

    init(){
        this.state = Enums.CELL_ENUM.NONE
    }

}