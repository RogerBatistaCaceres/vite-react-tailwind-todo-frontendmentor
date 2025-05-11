import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  // vamos a trabajar con formularios controlados
  // acordarnos que los formularios no controlados son los tipicos
  // que se verificaba el estado de las entradas cuando se pulsaba el botón
  // submit, se capturaban los elementos .value, y se procesaban
  // en el Submit.

  // Los formularios controlados es que nosotros estamos pendientes
  // de cada click que hace el usuario por teclado.

  const [title, setTitle] = useState("");

  // Esta función recibe siempre el (e) evento porque como regla
  // número 1 tenemos que utilizar el e.preventDefault(), esto es
  // de javaScript y que hace que el formulario no se procese y que
  // nosotros vamos a ver que acciones vamos a procesar.
  //
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    // console.log(title);

    // para reiniciar el resetear el title cuando lo hemos
    // procesado.
    // setTitle("");

    // Hacer un pequeño procesamiento o verificación
    // para no introducir espacios en blanco
    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  };

  return (
    <form
      // Este onSumit solo se ejecuta cuando se da Enter
      // y es cuando se va a procesar directamente el formulario
      // en la función que le hemos pasado, en este caso
      // handleSubmitAddTodo
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-400"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full bg-white text-gray-400 transition-all duration-1000 outline-none dark:bg-gray-800"
        value={title}
        // Este onChange va a estar pendiente de cada pulsación
        // del teclado, de cada click..
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
