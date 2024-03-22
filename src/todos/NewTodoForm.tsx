/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTodoRequest } from '../store/thunks'
import { getTodos } from '../store/selecters'
import styled from 'styled-components'
import { type Todo } from '../shared-types/todo-type'
import { type ReduxState } from '../shared-types/redux-state'

interface NewTodoFormProps {
  todos: [Todo]
  onCreatePressed: (arg0: string) => any
}

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`

const NewTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`

const NewTodoForm = ({ todos, onCreatePressed }: NewTodoFormProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
        <FormContainer>
            <NewTodoInput
                type='text'
                value={inputValue}
                placeholder='Type your new todo here'
                onChange={(e: any) => { setInputValue(e.target.value as string) }}
            />
            <NewTodoButton onClick={() => {
              const isDuplicateText = todos.some(todo => todo.todo === inputValue)
              if (!isDuplicateText) {
                onCreatePressed(inputValue)
                setInputValue('')
              }
            }}>
                Create Todo
            </NewTodoButton>
        </FormContainer>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  onCreatePressed: (text: string) => dispatch(createTodoRequest(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
