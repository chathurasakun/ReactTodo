import { expect } from 'chai';
import { getBorderStyleForMyTodos } from '../src/todos/TodoListItem';

describe('Get Border style for for my todo', () => {
    it('Get none when todo is not mine', () => {
        const expected = 'none';
        const actual = getBorderStyleForMyTodos(2);  // if it's not me. my user id is 1 always
        expect(actual).to.equal(expected);
    });
    it('get Border style red when its my todo', () => {
        const expected = '2px solid red';
        const actual = getBorderStyleForMyTodos(1);
        expect(actual).to.equal(expected);
    });
});