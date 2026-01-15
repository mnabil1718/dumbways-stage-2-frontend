import { createContext, useState } from "react";
import { type Todo } from "../utils/data.ts";


export type TodoContextPayload = {
    todos: Todo[];
    add: (todo: Todo) => void;
    getById: (id: string) => Todo;
    update: (todo: Todo) => void;
    remove: (id: string) => void;
}

export const TodoContext = createContext<TodoContextPayload | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);

    const add = (todo: Todo) => {
        setTodos(t => [...t, todo])
    }

    const update = (todo: Todo) => {
        setTodos(t => t.map(oldTodo => oldTodo.id === todo.id ? { ...todo } : oldTodo));
    }

    const remove = (id: string) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    }

    const getById = (id: string): Todo => {
        const todo = todos.find(t => t.id === id);
        if (!todo) throw new Error("no todo found");
        return todo;
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                add,
                update,
                getById,
                remove,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}
