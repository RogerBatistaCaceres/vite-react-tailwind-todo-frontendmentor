import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    // [&>article]:p-4, esta propiedad lo que dice es que
    // a los articles que estan por debajo del TodoList se les aplique
    // la siguiente propiedad p-4, que es lo mismo que px-4 y py-4.
    // padding por las x y padding por las y.
    // overflow-hidden: clase que obliga a que no se desbordara
    // los elementos internos al elemento padre.
    // Todo lo que pongas dentro de `${...}` será evaluado y
    // convertido a texto automáticamente, a esto se le llama "Template String"
    // "Template Literal", o interpolación. Ejemplo:
    // let a = 5; let b = 3;
    //let resultado = `La suma es ${a + b}`; // "La suma es 8"
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {
                // Función de flecha que devuelve el TodoItem, y le pasamos un valor draggableProvided
                (draggableProvided) => (
                  <TodoItem
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    {...draggableProvided.draggableProps}
                  />
                )
              }
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
