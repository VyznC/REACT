import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

let store = [
  { id: "e5", text: "Walk the dog" },
  { id: "e2", text: "Walk the cat" },
  { id: "e3", text: "Walk the monkey" },
];

function App() {
  const [entered, setEntered] = useState(store);

  const Result = (res) => {
    setEntered((prevState) => {
      return [res, ...prevState];
    });

    console.log(res);
    console.log(entered);
  };

  const filtitem = (e) => {
    setEntered(
      entered.filter((entereditem) => {
        return (
          entereditem.id !==
          e.target.parentElement.parentElement.parentElement.id
        );
      })
    );
    console.log(e.target.parentElement.parentElement.parentElement.id);
  };

  return (
    <div className="cont">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm Added={Result} />
      </div>
      <div className="todocont">
        <TodoList entered={entered} onClick={filtitem} />
      </div>
    </div>
  );
}

export default App;
