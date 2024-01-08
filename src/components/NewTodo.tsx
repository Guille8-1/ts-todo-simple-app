import { useRef } from "react";

type NewTodoProps = {
    onAddTodo: (text: string) => void
}
const NewTodo: React.FC<NewTodoProps> = (props) => {
    const todoContent = useRef<HTMLInputElement>(null);

    const taskInput = (e: React.FormEvent) => {
        e.preventDefault();
        const inputText: string = todoContent.current!.value;
        props.onAddTodo(inputText)
    }
    return (
        <form onSubmit={taskInput}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" name="" id="todo-text" ref={todoContent}/>
            </div>
            <button type="submit">Add To do Task</button>
        </form>
    )
}

export default NewTodo