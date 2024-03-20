import React from 'react';
import styled from 'styled-components';
import { Todo } from '../shared-types/todo-type';

interface TodoProps {
    todo: Todo;
    onRemoveTodo: (arg0: number) => void;
    onMarkCompleted: (arg0: number) => void;
};

interface TodoItemContainerProps {
    createdby: number;
}

const TodoItemContainer = styled.div<TodoItemContainerProps>`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForMyTodos = (createdby: number) => createdby === 1 ? '2px solid red' : 'none'

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${(props: any) => getBorderStyleForMyTodos(props.createdby)};
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22ee22;
`;

const RemovedButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemoveTodo, onMarkCompleted }: TodoProps) => {
    const Container = todo.completed ? TodoItemContainer : TodoItemContainerWithWarning;
    return (
        <Container createdby={todo.userId}>
            <h3>{todo.todo}</h3>
            {todo.userId == 1 ?
                <h5>Created by me</h5>
                :
                <h5>Created by user {todo.userId}</h5>
            }
            <h5></h5>
            <ButtonsContainer>
                {todo.completed ? null :
                    <CompletedButton onClick={() => onMarkCompleted(todo.id)}> Mark As Completed </CompletedButton>
                }
                <RemovedButton onClick={() => onRemoveTodo(todo.id)}> Remove </RemovedButton>
            </ButtonsContainer>
        </Container>
    )
};

export default TodoListItem;