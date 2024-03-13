import { expect } from "chai";
import { todos } from "../src/store/reducers";

describe("The todos reducer", () => {
  it("Adds a new todo when CREATE_TODO action received", () => {
    const originalState = { isLoading: false, data: [] };

    const fakeTodo = { id: 1, todo: "hello", completed: false, userId: 1 };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: {
        todo: fakeTodo,
      },
    };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected); // assertion
  });

  it("Mark todo completed when it receive MARK_COMPLETED action", () => {
    const originalState = {
      isLoading: false,
      data: [
        { id: 1, todo: "hello", completed: false, userId: 1 },
        { id: 2, todo: "climb everest", completed: false, userId: 2 },
      ],
    };

    const fakeAction = {
      type: "MARK_COMPLETED",
      payload: {
        todo: { id: 1, todo: "hello", completed: true, userId: 1 },
      },
    };

    const expected = {
      isLoading: false,
      data: [
        { id: 1, todo: "hello", completed: true, userId: 1 },
        { id: 2, todo: "climb everest", completed: false, userId: 2 },
      ],
    };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it("Remove a todo when REMOVE_TODO action recived", () => {
    const originalState = {
      isLoading: false,
      data: [{ id: 1, todo: "hello", completed: false, userId: 1 }],
    };

    const fakeAction = {
      type: "REMOVE_TODO",
      payload: {
        id: 1,
      },
    };

    const expected = {
      isLoading: false,
      data: [],
    };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it('change to todos load success state when receive LOAD_TODOS_SUCCESS action received', () => {
    const originalState = { isLoading: false, data: [] };

    const fakeAction = {
        type: 'LOAD_TODOS_SUCCESS',
        payload: {
            todos: [
                { id: 1, todo: 'pay bill', completed: false, userId: 1},
                { id: 2, todo: 'cook food for dinner', completed: false, userId: 1 },
            ],
        },
    };

    const expected = {
        isLoading: false,
        data: [
            { id: 1, todo: 'pay bill', completed: false, userId: 1},
            { id: 2, todo: 'cook food for dinner', completed: false, userId: 1 },
        ],
    };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it('Change to todos load in progress state when it received LOAD_TODOS_INPROGRESS action', () => {
    const originalState = { isLoading: false, data: [] };
    const fakeAction = { type: 'LOAD_TODOS_INPROGRESS' }

    const expected = { isLoading: true, data: [] };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it('Changes to todos load failure state when it received LOAD_TODOS_FAILURE action', () => {
    const originalState = { isLoading: false, data: [] };
    const fakeAction = { type: 'LOAD_TODOS_FAILURE' };

    const expected = { isLoading: false, data: [] };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it('Returns current state when no action dispatched', () => {
    const originalState = { isLoading: false, data: [] };
    const fakeAction = {
        type: undefined,
    };

    const expected = { isLoading: false, data: [] };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
