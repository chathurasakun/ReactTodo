/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { connect } from 'react-redux'
import {
  loadTodos,
  deleteTodoRequest,
  markTodoCompletedRequest
} from '../store/thunks'
import {
  getTodosLoading,
  getCompletedTodos,
  getInCompleteTodos
} from '../store/selecters'
import styled from 'styled-components'
import { type Todo } from '../shared-types/todo-type'
import { type ReduxState } from '../shared-types/redux-state'

interface TodoListProps {
  completedTodos: Todo[]
  inCompletedTodos: Todo[]
  onRemoveTodo: (arg0: number) => any
  isLoading: boolean
  startLoadingTodos: () => any
  markCompleted: (arg0: number) => any
}

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`

const TodoList = ({
  completedTodos,
  inCompletedTodos,
  onRemoveTodo,
  isLoading,
  startLoadingTodos,
  markCompleted
}: TodoListProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      startLoadingTodos()
    }, 2000)
    return () => { clearTimeout(timer) }
  }, [])

  const loadingMessage = <div>Loading Todos...</div>
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>In Complete</h3>
      {inCompletedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onMarkCompleted={markCompleted}
        />
      ))}
      <h3>Completed</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onMarkCompleted={markCompleted}
        />
      ))}
    </ListWrapper>
  )
  return isLoading ? loadingMessage : content
}

const mapStateToProps = (state: ReduxState) => ({
  completedTodos: getCompletedTodos(state),
  inCompletedTodos: getInCompleteTodos(state),
  isLoading: getTodosLoading(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  onRemoveTodo: (id: number) => dispatch(deleteTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
  markCompleted: (id: number) => dispatch(markTodoCompletedRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
