import { useState } from "react";

function App() {
  const [toDo, SetToDo] = useState("");
  const [toDos, SetToDos] = useState([]);
  const onChange = (event) => SetToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    console.log(toDos);
    SetToDo("");
    SetToDos((currentArray) => [toDo, ...currentArray]); //...이 핵심! 새로운 array를 리턴
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
