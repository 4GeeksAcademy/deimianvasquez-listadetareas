import { useState } from "react";


//create your first component
const Home = () => {

	const [task, setTask] = useState({
		task: "",
		isDone: false,

	})

	const [todos, setTodos] = useState([])

	const handleChange = (event) => {
		setTask({
			...task,
			[event.target.name]: event.target.value,

		})
	}


	const saveTask = (event) => {
		if (event.key == "Enter") {
			setTodos([
				...todos,
				task
			])
			setTask({
				task: "",
				isDone: false
			})
		}
	}

	const deleteTask = (taskDelete) => {
		const newTodos = todos.filter((item, index) => index != taskDelete)
		setTodos(newTodos)

		// let aux = []

		// for (let index in todos) {
		// 	console.log(`${index} --> ${taskDelete}`)
		// 	if (index == taskDelete) {
		// 		continue
		// 	} else {
		// 		aux.push(todos[index])
		// 	}
		// }

		// setTodos(aux)

	}






	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<h1 className="text-danger text-center">TODOS</h1>
				<div className="col-12 col-md-7 border">
					<form
						className=" py-3"
						onSubmit={(event) => { event.preventDefault() }}
					>
						<input
							type="text"
							className="form-control"
							placeholder="Add your task"
							name="task"
							value={task.task}
							onChange={handleChange}
							onKeyDown={saveTask}
						/>
					</form>

					<ul>
						{
							todos.map((item, index) => {
								return (
									<li
										key={index}
										className=""

									>
										{item.task}
										<span>
											<i
												onClick={() => deleteTask(index)}
												className="fas fa-times"></i>
										</span>
									</li>
								)
							})
						}
					</ul>
					{
						`Tengo ${todos.length} por finalizar`
					}
				</div>
			</div>
		</div >
	);
};

export default Home;