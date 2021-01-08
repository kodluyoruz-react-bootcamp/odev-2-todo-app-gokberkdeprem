import TodoListItem from "./TodoListItem";

import cn from "classnames";

function TodoList({ todos, setTodos, filter }) {
	return (
		<>
			<ul class="todo-list">
				{todos.map((todo, i) =>
					0 === filter ? (
						<li key={i} className={cn(todo.isDone && "completed")}>
							<div class="view">
								<TodoListItem
									todos={todos}
									todoItem={todo}
									setTodos={setTodos}
									id={i}
								/>
							</div>
						</li>
					) : 1 === filter && todo.isDone === false ? (
						<li key={i} className={cn(todo.isDone && "completed")}>
							<div class="view">
								<TodoListItem
									todos={todos}
									todoItem={todo}
									setTodos={setTodos}
									id={i}
								/>
							</div>
						</li>
					) : (
						2 === filter && todo.isDone === true ? <li key={i} className={cn(todo.isDone && "completed")}>
							<div class="view">
								<TodoListItem
									todos={todos}
									todoItem={todo}
									setTodos={setTodos}
									id={i}
								/>
							</div>
						</li> : null
					)
				)}
			</ul>
		</>
	);
}

export default TodoList;
