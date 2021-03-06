import { Button } from "@material-ui/core";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "BUILDING TODO LIST IN 1 DAYðð¨âð¤ð",
    "BUILDING TODO LIST IN 1 DAYðð¨âð¤ð",
  ]);

  const [inputt, setInputt] = useState("");
  console.log(todos);
  console.log(inputt);
  const addTodo = (event) => {
    console.log("ðð", "building day 1 project");
    setTodos([...todos, inputt]);
    event.preventDefault()
    setInputt("")
  };
  return (
    <div className="App">
      <h1>MAKING TODO LIST ð¨âð»ð¨âð»ð¨âð»</h1>
      <form>
        <input
          value={inputt}
          onChange={(event) => setInputt(event.target.value)}
        />
       <Button type="submit" onClick={addTodo} variant="contained" color="primary" >ADD</Button>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
