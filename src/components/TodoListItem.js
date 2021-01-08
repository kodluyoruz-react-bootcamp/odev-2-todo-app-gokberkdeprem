import { useState, useEffect } from "react";

function TodoListItem({ todos, todoItem, setTodos, id }) {
	const [newTodo, setNewTodo] = useState(todoItem.content);

	useEffect(() => {
		setNewTodo(todoItem.content);
	}, [todoItem]);

	function toggleHandleCheckbox() {
		setTodos(
			todos.map((todo, i) =>
				i === id ? { ...todo, isDone: !todoItem.isDone } : todo
			)
		);
	}

	function deleteTodo() {
		setTodos(todos.filter((todo, i) => i !== id));
	}

	// -----

	function handleNewTodo(event) {
		setNewTodo(event.target.value);
	}

	function handleTodos(event) {
		if (event.charCode === 13) {
			event.preventDefault();

			setTodos(
				todos.map((todo, i) =>
					i === id ? { ...todo, content: newTodo } : todo
				)
			);
		}
	}

	return (
		<>
			<input
				onClick={toggleHandleCheckbox}
				property="done"
				class="toggle"
				type="checkbox"
			/>
			<label property="text">{todoItem.content}</label>
			<input
				onChange={handleNewTodo}
				onKeyPress={handleTodos}
				value={newTodo}
				type="text"
			/>
			<button onClick={deleteTodo} class="destroy"></button>
		</>
	);
}

export default TodoListItem;
