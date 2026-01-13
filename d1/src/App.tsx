import { data, type Todo } from "./utils/data";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
        const [todos, setTodos] = useState(data);
        const [input, setInput] = useState("");

        const addTodoHandler = () => {
                if (!input) return;

                const newTodo: Todo = {
                        id: Date.now(),
                        label: input,
                };

                setTodos((prev) => [...prev, newTodo]);
                setInput("");
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
                                        placeholder="Enter todo label..."
                                />
                                <button onClick={addTodoHandler} disabled={!input}>
                                        + Add Todo
                                </button>
                        </div>

                        <ul>
                                {todos.map((todo) => (
                                        <TodoItem key={todo.id} todo={todo} />
                                ))}
                        </ul>
                </div>
        );
}

export default App;
