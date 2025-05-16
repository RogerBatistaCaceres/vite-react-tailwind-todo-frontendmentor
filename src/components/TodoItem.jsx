import React from "react";
import IconCheck from "./icons/IconCheck";
import CrossIcon from "./icons/IconCross";

const TodoItem = React.forwardRef(
  ({ todo, removeTodo, updateTodo, ...props }, ref) => {
    // se puede hacer la desestructuración y llamar directamente a las propiedades del todo
    // dark:bg-gray-800, hace que se tenga en cuenta cuando la aplicación está en modo dark
    // para emular el modo Hacer Ctrl+Shift+P en visual studio code
    // y buscar Emulate CSS prefers-color-scheme:light/dark
    // los operadores rest operator y spread operatos
    // el operador rest operator "recolecta todos los valores separados por coma
    // y me los transforma en un array [].Ejemplo Sumar(1,2,3) return ...numero resultado [1,2,3]
    // el operador spread operator se usa para expandir (esparcir elementos de un array[])
    // en lugares donde se esperan elementos individuales.
    const { id, title, completed } = todo;
    return (
      <article
        {...props}
        ref={ref}
        className="flex gap-4 border-b border-b-gray-400"
      >
        {/* Este es el botón sim clickear
      <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        <IconCheck></IconCheck>
      </button>
      */}

        {/* clases de tildwind, border-2 bg-gradient-to-r from-indigo-500 via-purple-500, para colorear el botón rendondo  */}
        {/*  https://v2.tailwindcss.com/docs/gradient-color-stops */}
        {/* <button className="h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> */}

        {/* Para posicionar el check en el medio usamos: flexbox o grid   */}
        {/* con flex: flex justify-center (lo justifica por el eje horizontal ) items-center (lo justifica por el eje vertical) */}
        {/* con flex tengo que quitar el inline-block*/}
        {/* <button className="flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> */}

        {/* La otra opción para centrar el check es usar la clase grid*/}
        {/* con grid podemos usar la propiedad place-items-center, que sustituye a las propiedades*/}
        {/* items-center justify-center de flex*/}
        {/*<button className="grid h-5 w-5 flex-none place-items-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">*/}

        {/* Ahora para ver si esta clicado usemos el siguiente codigo*/}
        {/* con el template string, que nos permite hacer la interpolación*/}
        {/*<button
        className={`${completed ? "grid h-5 w-5 flex-none place-items-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block h-5 w-5 flex-none rounded-full border-2"}`}
      >*/}

        {/* Podemos darnos cuenta que hay varias clases que se repiten */}
        {/* por lo que podemos dejarlas fuera que siempre se ejecuten*/}
        {/* esté o no esté la variable completed en true*/}
        <button
          className={`h-5 w-5 flex-none rounded-full border-2 border-gray-400 ${completed ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block"}`}
          // hay que pasarlo como función de flecha, porque de lo contrario
          // se ejecuta cuando se refresh la primera vez
          onClick={() => {
            updateTodo(id);
          }}
        >
          {/* Esto es para pintar el icono de check */}
          {/* si la variable completed es true que pinte el IconCheck de lo contrario que no lo pinte */}
          {/* if completed then <IconCheck></IconCheck> */}
          {completed && <IconCheck></IconCheck>}
        </button>
        {/* <p className="grow text-gray-600">{todo.title}</p> */}
        {/* y ... Usando las desestructuración */}

        {/* Para hacer el texto tachado usar la siguiente clase tomada del siguiente enlace/}
      {/* https://www.creative-tim.com/twcomponents/cheatsheet*/}
        {/* buscando el text decoration, clase line-through*/}

        <p
          className={`grow text-gray-600 transition-all duration-1000 dark:text-gray-400 ${completed && "line-through"}`}
        >
          {title}
        </p>
        <button
          className="flex-none"
          onClick={() => {
            removeTodo(id);
          }}
        >
          <CrossIcon />
        </button>
      </article>
    );
  },
);

export default TodoItem;
