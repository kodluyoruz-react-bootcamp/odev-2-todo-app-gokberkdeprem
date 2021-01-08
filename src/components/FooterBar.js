import { useEffect, useState } from "react";

function FooterBar({ todos, filter, setFilter }) {
	const [remain, setRemain] = useState(0);

	useEffect(() => {
		let left = 0;

		todos.map((todo, i) => (todo.isDone === false ? (left += 1) : null));

		setRemain(left);
	}, [todos]);

	function handlefilter(type) {
		setFilter(type);
	}

	return (
		<>
			<footer class="footer">
				<meta property="todoDone" content="[count(todo where done)]" />
				<meta property="todoLeft" content="[count(todo where !done)]" />

				<span class="todo-count">
					<strong mv-value="todoLeft"> {remain} </strong>left
				</span>

				<meta property="activeFilter" content="all" mv-storage="none" />
				<ul class="filters">
					<li
						onClick={() => {
							handlefilter(0);
						}}
					>
						<a

						// className="[if(activeFilter = 'all', 'selected')]"
						// mv-action="set(activeFilter, 'all')"
						>
							All
						</a>
					</li>
					<li
						onClick={() => {
							handlefilter(1);
						}}
					>
						<a

						// class="[if(activeFilter = 'active', 'selected')]"
						// mv-action="set(activeFilter, 'active')"
						>
							Active
						</a>
					</li>
					<li
						onClick={() => {
							handlefilter(2);
						}}
					>
						<a

						// class="[if(activeFilter = 'completed', 'selected')]"
						// mv-action="set(activeFilter, 'completed')"
						>
							Completed
						</a>
					</li>
				</ul>
				<button
					// hidden="[todoDone = 0]"
					class="clear-completed"
					mv-action="delete(todo where done)"
				>
					Clear completed
				</button>
			</footer>
		</>
	);
}

export default FooterBar;
