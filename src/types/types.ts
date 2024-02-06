export interface StateType {
  currentCounter: number;
}

export interface ICounterContainer {
  state: StateType;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
  onResetClick: () => void;
}

export interface ILoginData {
  email: string;
  password: string;
}
