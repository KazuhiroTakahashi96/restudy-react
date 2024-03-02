const CompleteTodo = ({ completedTodos, onClickBack }) => {
  return (
    <div>
      <p>完了したこと一覧</p>
      {completedTodos.map((todo) => (
        <div key={todo} className="todos">
          <p>{todo}</p>
          <button onClick={() => onClickBack(todo)}>戻す</button>
        </div>
      ))}
    </div>
  );
};

export default CompleteTodo;
