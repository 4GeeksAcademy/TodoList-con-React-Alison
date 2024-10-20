import React, {useState} from "react";



//create your first component
const Home = () => {
	let [listaTareas, setListaTareas] = useState(["cocinar", "estudiar", "ordenar"]);
	const[nuevaTarea, setNuevaTarea]= useState("")
	return (
		<div className="container mt-5">
			<h1 className="text-center mt-5">Todo</h1>
			<div className="mx-auto col-6">
				<input type="text" className="form-control" placeholder="¿Que necesitas hacer?"
				value={nuevaTarea}onChange={(evento) => {
					setNuevaTarea(evento.target.value)
				}}
				onKeyUp={(evento) => {

					if(evento.key== "Enter"){
						setListaTareas([...listaTareas, nuevaTarea]);
						setNuevaTarea("")
					}

					console.log(evento.key)
					
				}}
				/>
				<ul className="">

					{listaTareas.map((item, index) => {
						return (
							<li key={index}>
								{item} <i onClick= {()=>{
								const aux =	listaTareas.filter((task, ind) =>{
										return(ind != index)
									})
									setListaTareas(aux)

								}} className="fa-light fa-x icono-oculto"></i>
							</li>
						)
					})}

				</ul>
				<span>
					{listaTareas.length} Items left
				</span>

			</div>
		</div>

	);
};

export default Home;
