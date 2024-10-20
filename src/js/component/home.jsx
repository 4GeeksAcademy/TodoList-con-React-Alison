import React, { useState } from "react";

//create your first component
const Home = () => {
  let [listaTareas, setListaTareas] = useState([
    "Visitar a mis amigas",
    "Pasear a mi perra",
    "Hacer mis proyectos",
    "Hacer las compras",
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null); // Para saber cuál tarea está seleccionada

  return (
    <div className="container mt-5">
      <h1 className="text-center title">todos</h1>
      <div className="mx-auto col-6 todo-container">
        <input
          type="text"
          className="form-control input-task"
          placeholder="¿Qué necesitas hacer?"
          value={nuevaTarea}
          onChange={(evento) => {
            setNuevaTarea(evento.target.value);
          }}
          onKeyUp={(evento) => {
            if (evento.key === "Enter" && nuevaTarea.trim() !== "") {
              setListaTareas([...listaTareas, nuevaTarea]);
              setNuevaTarea("");
            }
          }}
        />
        <div className="card mt-3 shadow-sm">
          <ul className="list-group list-group-flush">
            {listaTareas.map((item, index) => (
              <li
                key={index}
                className="list-group-item task-item"
                onMouseEnter={() => setTareaSeleccionada(index)} 
                onMouseLeave={() => setTareaSeleccionada(null)}
              >
                {item}{" "}
                {tareaSeleccionada === index &&(
                  <i
                    onClick={() => {
                      const aux = listaTareas.filter((task, ind) => ind !== index);
                      setListaTareas(aux);
                    }}
                    className="fa fa-times icono-oculto"
                  ></i>
                )}
              </li>
            ))}
          </ul>
          <div className="card-footer text-muted">
            {listaTareas.length} {listaTareas.length === 1 ? "item" : "items"} left
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
