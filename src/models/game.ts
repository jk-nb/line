export module Game {
    export declare type T = {
        state:      number,
        turn:       number,
    }

    export enum GAME_STATE_ENUM {
        INIT    = 0,
        PLAY    = 1,
        FINISH  = 2,
    }

    export var buttonMsg = ["ゲーム開始", "終了", "もう１回する"]

    export var init = (): T => {
        return {
            state: GAME_STATE_ENUM.INIT,
            turn: 1,
        }
    }
}