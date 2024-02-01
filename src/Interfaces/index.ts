export interface StateType{
    currentCounter:number;
}

export interface ICounterContainer{
    state:StateType;
    onIncrementClick: ()=> void;
    onDecrementClick: ()=> void;
    onResetClick: ()=> void;
}