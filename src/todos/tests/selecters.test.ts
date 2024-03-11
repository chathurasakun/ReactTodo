import { expect } from 'chai';
import { getCompletedTodos} from '../../store/selecters';
import { Todo } from '../../shared-types/todo-type';

describe('The Completed Todos Selecter', () => {
    it('Returns completed todos', () => {
        const fakeTodos = [
            { id: 1, todo: 'hello', completed: true, userId: 1},
            { id: 2, todo: 'A', completed: false, userId: 2},
            { id: 3, todo: 'washing', completed: false, userId: 3 },
        ];
        const expected = [{ id: 1, todo: 'hello', completed: true, userId: 1}];

        const actual = getCompletedTodos.resultFunc(fakeTodos as [Todo]);

        expect(actual).to.deep.equal(expected);
    });
});