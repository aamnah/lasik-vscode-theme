import TodoItem, { TodoItemType } from "./TodoItem"
import "./TodoList.scss"

interface TodoListProps {
  title?: string
  todos: Array<TodoItemType>
  onClick: any
}
function renderTodoList(todoList: Array<TodoItemType>, onClick: any) {
  return todoList.map((item, index) => {
    return (
      <TodoItem
        key={index}
        id={item.id}
        text={item.text}
        status={item.status}
        onClick={onClick}
      />
    )
  })
}

export default function TodoList({
  title = "To Do",
  todos,
  onClick,
}: TodoListProps) {
  return (
    <div className="TodoList">
      <h2 className="Title">{title}</h2>
      {renderTodoList(todos, onClick)}
    </div>
  )
}
