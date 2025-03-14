import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    // [&>article]:p-4, esta propiedad lo que dice es que
    // a los articles que estan por debajo del TodoList se les aplique
    // la siguiente propiedad p-4, que es lo mismo que px-4 y py-4.
    // padding por las x y padding por las y.
    // overflow-hidden: clase que obliga a que no se desbordara
    // los elementos internos al elemento padre.
    <div className="dark:bg-gray800 mt-8 overflow-hidden rounded-t-md bg-white [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
