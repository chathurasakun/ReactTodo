import { type Todo } from './todo-type'

export interface TodoResponse {
  todos: [Todo]
  total: number
  skip: number
  limit: number
}
