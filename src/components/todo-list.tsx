interface PropsTodo {
  todos: { id: string, text: string }[]
  onDeleteTodo: (id: string) => void
};

const TodoList: React.FC<PropsTodo> = props => {
  return (
    <ul>
        {
            props.todos.map(todo => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete Task</button>
              </li>
            ))
        }
    </ul>
  )
}

export default TodoList
