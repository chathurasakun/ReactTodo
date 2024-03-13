import { Todo } from "./todo-type";

export type ReduxState = {
  todos: {
    isLoading: boolean;
    data: [Todo];
  };
};
