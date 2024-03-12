import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import { loadTodos } from '../src/store/thunks';
import sinon from 'sinon';

describe('The load todos thunk', () => {
    it('Dispatches the correct action in the success scenario', async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = {
            todos: [
                { todo: 'hello'}, 
                { todo: 'hi'}
            ],
        };
        fetchMock.get('https://dummyjson.com/todos', fakeTodos);

        const expectedFirstAction = { type: 'LOAD_TODOS_INPROGRESS' };
        const expectedSecondAction = { 
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos.todos,
            }, 
        };

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    });
});