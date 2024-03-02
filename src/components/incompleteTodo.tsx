import React from "react";

const IncompleteTodo = ({ todos, onClickComplete, onClickDelete }) => {
  return (
    <div>
      <p>やること一覧</p>
      {todos.map((todo) => (
        <div key={todo} className="todos">
          <p>{todo}</p>
          <button onClick={() => onClickComplete(todo)}>完了</button>
          <button onClick={() => onClickDelete(todo)}>削除</button>
        </div>
      ))}
    </div>
  );
};

export default IncompleteTodo;
