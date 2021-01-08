import { useState, useEffect } from "react";

function NewTodo({ todos, setTodos }) {
	const [newTodo, setNewTodo] = useState("");

	useEffect(() => {
		setNewTodo("");
	}, [todos]);

	function handleNewTodo(event) {
		setNewTodo(event.target.value);
	}

	function handleTodos(event) {
		if (event.charCode === 13) {
			event.preventDefault();
			setTodos([{ content: newTodo, isDone: false }, ...todos]);
		}
	}

	return (
		<>
			<form>
				<input
					property="newTodo"
					value={newTodo}
					onChange={handleNewTodo}
					onKeyPress={handleTodos}
					class="new-todo"
					placeholder="What needs to be done?"
					autofocus
				/>
			</form>
		</>
	);
}

export default NewTodo;
