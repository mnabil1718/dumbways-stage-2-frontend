import type { Todo } from "../utils/data";
import { useTodo } from "../hooks/use-todo";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { update, remove } = useTodo();
  const toggleCompleted = () => {
    const updated: Todo = {
      ...todo,
      completed: !todo.completed,
    };
    update(updated);
  };

  const deleteHandler = () => {
    remove(todo.id);
  };

  const updateHandler = (e: React.FocusEvent<HTMLSpanElement>) => {
    const renamed = e.currentTarget.textContent?.trim() || "";

    if (renamed === todo.title || !renamed) return;

    update({
      ...todo,
      title: renamed,
    });
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // stop newline being inserted
      e.currentTarget.blur(); // triggers onBlur → updateHandler
    }
  };

  return (
    <li className="todo-item">
      <div className="todo-item-input">
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.completed}
          onChange={() => {
            toggleCompleted();
          }}
        />

        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            opacity: todo.completed ? 0.6 : 1,
          }}
          contentEditable={!todo.completed}
          suppressContentEditableWarning
          onBlur={updateHandler}
          onKeyDown={enterHandler}
        >
          {todo.title}
        </span>
      </div>
      <div className="todo-item-action">
        <button className="delete-button mr-2" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
