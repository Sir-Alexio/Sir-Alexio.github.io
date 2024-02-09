export type Action = {
  type: string;
};

export type ActionWithPayload<T> = Action & {
  payload: T;
};
