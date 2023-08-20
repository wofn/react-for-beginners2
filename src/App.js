import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, SetKeyword] = useState("");
  const onChange = (event) => SetKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log("once");
  }, []);
  useEffect(() => {
    console.log("keyword change");
  }, [keyword]);
  useEffect(() => {
    console.log("counter change");
  }, [counter]);

  useEffect(() => {
    console.log("counter & keyword change");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
