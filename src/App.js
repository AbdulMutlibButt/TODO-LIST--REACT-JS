import { Button } from "@material-ui/core";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "BUILDING TODO LIST IN 1 DAY🚀👨‍🎤🚀",
    "BUILDING TODO LIST IN 1 DAY🚀👨‍🎤🚀",
  ]);

  const [inputt, setInputt] = useState("");
  console.log(todos);
  console.log(inputt);
  const addTodo = (event) => {
    console.log("🚀🚀", "building day 1 project");
    setTodos([...todos, inputt]);
    event.preventDefault()
    setInputt("")
  };
  return (
    <div className="App">
      <h1>MAKING TODO LIST 👨‍💻👨‍💻👨‍💻</h1>
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
