import { useContext } from "react";
import { TodoContext, type TodoContextPayload } from "../context/todo-context";
export function useTodo() {
    const payload: TodoContextPayload | null = useContext(TodoContext);

    if (!payload) throw new Error("no todo context found");
    return payload; 
}
