const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-gray-800">
      <span className="text-gray-400">{computedItemsLeft} item left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
