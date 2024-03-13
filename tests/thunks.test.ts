import "node-fetch";
import fetchMock from "fetch-mock";
import { expect } from "chai";
import { loadTodos, createTodoRequest, deleteTodoRequest, markTodoCompletedRequest } from "../src/store/thunks";
import sinon from "sinon";

describe("The load todos thunk", () => {
  it("Dispatches the correct action in the success scenario", async () => {
    const fakeDispatch = sinon.spy();
    const fakeTodos = {
      todos: [{ todo: "hello" }, { todo: "hi" }],
    };
    fetchMock.get("https://dummyjson.com/todos", fakeTodos);

    const expectedFirstAction = { type: "LOAD_TODOS_INPROGRESS" };
    const expectedSecondAction = {
      type: "LOAD_TODOS_SUCCESS",
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

describe("Create todo thunk", () => {
  it("Dispatches the success scenario", async () => {
    const fakeDispatch = sinon.spy();
    const fakeTodo = { id: 1, todo: "hello", completed: false, userId: 2 };

    fetchMock.post("https://dummyjson.com/todos/add", fakeTodo);

    await createTodoRequest("hello")(fakeDispatch);

    const expectedAction = {
      type: "CREATE_TODO",
      payload: {
        todo: fakeTodo,
      },
    };

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedAction);

    fetchMock.reset();
  });
});

describe("Remove todo thunk", () => {
    it("Dispatches the success scenario", async () => {
      const fakeDispatch = sinon.spy();
      const fakeTodo = { id: 1, todo: "hello", completed: false, userId: 2 };
  
      fetchMock.delete(`https://dummyjson.com/todos/${fakeTodo.id}`, fakeTodo);
  
      await deleteTodoRequest(fakeTodo.id)(fakeDispatch);
  
      const expectedAction = {
        type: "REMOVE_TODO",
        payload: {
          id: fakeTodo.id,
        },
      };
  
      expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedAction);
  
      fetchMock.reset();
    });
});

describe("Mark completed todo thunk", () => {
    it("Dispatches the success scenario", async () => {
      const fakeDispatch = sinon.spy();
      const fakeTodo = { id: 1, todo: "hello", completed: true, userId: 2 };
  
      fetchMock.put(`https://dummyjson.com/todos/${fakeTodo.id}`, fakeTodo);
  
      await markTodoCompletedRequest(fakeTodo.id)(fakeDispatch);
  
      const expectedAction = {
        type: "MARK_COMPLETED",
        payload: {
          todo: fakeTodo,
        },
      };
  
      expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedAction);
  
      fetchMock.reset();
    });
});


