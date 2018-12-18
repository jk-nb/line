export module Cell {
    export declare type T = {
        row:      number,
        col:      number,
        state:    CELL_ENUM,
    }
    
    export enum CELL_ENUM {
        NONE    = 0,
        FIRST   = 1,
        SECOND  = 2,
    }
  
    export var empty = (column:number ,row:number): T => {
      return {
        row:  column,
        col:  row,
        state: CELL_ENUM.NONE
      }
    }
}
  