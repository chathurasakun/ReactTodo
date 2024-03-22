import { type Todo } from './todo-type'

export interface ReduxState {
  todos: {
    isLoading: boolean
    data: [Todo]
  }
}
