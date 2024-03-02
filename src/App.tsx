import { useState } from "react";
import "./App.css";
import CompleteTodo from "./components/completeTodo";
import IncompleteTodo from "./components/incompleteTodo";
import Input from "./components/input";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onChangeText = (e) => setText(e.target.value);
  const onClickAdd = () => {
    if (text === "") return;
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setText("");
  };
  const onClickDelete = (incompleteTodo: string) => {
    const newTodos = [...todos].filter((todo) => todo !== incompleteTodo);
    setTodos(newTodos);
  };
  const onClickComplete = (incompleteTodo: string) => {
    const newIncompleteTodoTodos = [...todos].filter(
      (todo) => todo !== incompleteTodo
    );
    setTodos(newIncompleteTodoTodos);

    setCompletedTodos([...completedTodos, incompleteTodo]);
  };
  const onClickBack = (completedTodo: string) => {
    const newTodos = [...completedTodos].filter(
      (todo) => todo !== completedTodo
    );

    setCompletedTodos(newTodos);

    setTodos([...todos, completedTodo]);
  };

  return (
    <>
      <Input text={text} onChangeText={onChangeText} onClickAdd={onClickAdd} />
      <IncompleteTodo
        todos={todos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <hr />
      <CompleteTodo completedTodos={completedTodos} onClickBack={onClickBack} />
    </>
  );
}

export default App;
