import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoList from "./components/TodoList.jsx";

// Esta lista es una array[] que dentro va a tener objetos{},
const initialStateTodos = [
  { id: 1, title: "Complete online Javascript bluuweb Curse", completed: true },
  { id: 2, title: "Go to the gym", completed: false },
  { id: 3, title: "10 minutes meditation", completed: false },
  { id: 4, title: "Pick up groceries", completed: true },
  { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    // creo un nuevo objeto para adicionarlo a la lista de todos
    const newTodo = {
      id: Date.now(),
      // title: title.trim(),
      title,
      completed: false,
    };
    // hago la clonación (copia) de los "todos", que ya existen
    // con la expresión "...todos" (comando spread) y lo adiciono
    // a esa copia del array usando la expresión [ele,ele1]
    // y llamo al la función setTodos para que me renderee los
    // elementos que cambien esa variable.
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    // La función filter devuelve todos los elementos que cumplan
    // la condición señalada.. por eso devuelve todos los
    // elementos que no tienen el id, y el del id lo quita de la lista
    // de "Todos"
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    // Cuando le pasemos un id y ese id sea igual al id del de la lista
    // entonces me va a devolver un objeto que es la copia del todo
    // pero con la propiedad completado invertida, en caso contrario devuelve el "todo"
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  /*
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
  });
  */
  const filteredTodos = () => {
    // El filter lo tengo del useState
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    // Empezamos a poner las clases de tailwindccs... poner una imagen de background y que no se repita
    // bg-cover es para que cubra toda la página
    // mx-auto es un margin a la izquierda y a la derecha automatico
    // px-4 es un padding x de 4
    // <article /> por lo general lo utilizamos como un contenedor de elementos que se van
    // a repetir...
    // cuando tenemos elemento a la Izquierda y a la derecha lo mejor es trabajar con
    // flexbox justify-between, para enviar un elemento a cada lado...
    // Con flex podemos posicionar los elementos uno a lado del otro.
    // Espaciados: mt, px
    // mt-8, espaciados magin-Top...
    // px-4, padding x de 4
    // tracking-widest,tracking-[0.3em]  para dar la separación entre las letras ...
    //  si usamos los corchetes es para espeficicar un tamaño personalizado a la separación entre las letras
    //  lo común es no usarlo, solo si es necesario.
    // rounded-md: es para redondear los bordes del input
    // rounded-t-md: es para redondear los bordes pero del Top
    // rounded-b-md: es para redondear los bordes pero del Botton
    // overflow-hidden: Esto hace que el contenido no se escape de su contenedor... y que el input del
    // create todo respete el redondeado.
    // py-4: paddin arriba y abajo, por las y de -4
    // inline-block: convierte elementos de linea a bloques y se les puede poner entonces h y w Height, y Width
    // items-center: es para alinear los elementos al centro. se usa con flex y con grip
    // w-full: le aplica un width del 100% al input para ampiarlo
    // outline-none: para que no me salga el border el input cuando voy a escribir en él.
    // min-h-screen: Hace que pinte el backqround en toda la altura de la pantalla, toma mímimo el 100% del alto de la pantalla (viewport)
    // flex grow: hace que los elementos traten de crecer lo máximo posible.
    // flex-none: es para que esos elementos no crezcan, que solo crezca el que tiene grow
    // hover: te pone el color cuando se pasa por arriba del botón
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filteredTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        {/* Lo paso directamente sin función flecha para que se ejecute */}
        {/* directamente, y en el componente solo tengo que pintar el resultado  */}
        {/* que es un número  */}
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center">
        Drag and Drop to reorder list
      </footer>
    </div>
  );
};

export default App;
