import { expect } from 'chai';
import { getCompletedTodos} from '../../store/selecters';

describe('The Completed Todos Selecter', () => {
    it('Returns completed todos', () => {
        const fakeTodos = [
            { todo: 'hello', completed: true, userId: 1},
            { todo: 'A', completed: false, userId: 2},
            { todo: 'washing', completed: false, userId: 3 }
        ]
        const expected = [{ todo: 'hello', completed: true, userId: 1}];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});