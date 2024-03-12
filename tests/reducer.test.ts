import { expect } from 'chai';
import { todos } from '../src/store/reducers'; 

describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action received', () => {
        const fakeTodo = { todo: 'hello', completed: false, userId: 1 };
        const fakeAction = { 
            type: 'CREATE_TODO', 
            payload: {
                todo: fakeTodo
            }, 
        };
        const originalState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [fakeTodo],
        };
        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected); // assertion
    });
});