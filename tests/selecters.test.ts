import { expect } from 'chai';
import { getCompletedTodos, getInCompleteTodos} from '../src/store/selecters';
import { Todo } from '../src/shared-types/todo-type';

const fakeTodos = [
    { id: 1, todo: 'hello', completed: true, userId: 1},
    { id: 2, todo: 'A', completed: false, userId: 2},
    { id: 3, todo: 'washing', completed: false, userId: 3 },
];

describe('The Completed Todos Selecter', () => {
    it('Returns completed todos', () => {
        const expected = [{ id: 1, todo: 'hello', completed: true, userId: 1}];

        const actual = getCompletedTodos.resultFunc(fakeTodos as [Todo]);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The Incompleted Todos Selecter', () => {
    it('Returns incompleted todos', () => {
        const expected = [ 
            { id: 2, todo: 'A', completed: false, userId: 2},
            { id: 3, todo: 'washing', completed: false, userId: 3 },
        ];
        const actual = getInCompleteTodos.resultFunc(fakeTodos as [Todo]);

        expect(actual).to.deep.equal(expected);
    });
});