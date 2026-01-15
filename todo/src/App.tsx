import "./App.css";
import { type Todo } from "./utils/data";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import { useTodo } from "./hooks/use-todo";

function App() {
  const { todos, add } = useTodo();
  const [input, setInput] = useState("");

  const addTodoHandler = () => {
    if (!input) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false,
    };
    add(newTodo);
    setInput("");
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodoHandler();
    }
  };

  return (
    <div>
      <div></div>
      <h1>To-do Notes</h1>

      <div className="add-container">
        <input
          type="text"
          value={input}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setInput(e.currentTarget.value)
          }
          className="todo-input"
          name="todo-input"
          placeholder="Enter new todo label..."
          onKeyDown={enterHandler}
        />
        <button
          className="add-button"
          onClick={addTodoHandler}
          disabled={!input}
        >
          + Add Todo
        </button>
      </div>

      <ul>
        {todos.length < 1 && <p>Add your todo first</p>}
        {todos.length > 0 &&
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
}

export default App;
