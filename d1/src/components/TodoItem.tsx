import { useState } from "react";
import type { Todo } from "../utils/data";

type TodoItemProps = {
        todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
        const [completed, setCompleted] = useState(false);

        return (
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <input
                                type="checkbox"
                                checked={completed}
                                onChange={() => {
                                        setCompleted(!completed);
                                }}
                        />

                        <span
                                style={{
                                        textDecoration: completed ? "line-through" : "none",
                                        opacity: completed ? 0.6 : 1,
                                }}
                        >
                                {todo.label}
                        </span>
                </li>
        );
};

export default TodoItem;
