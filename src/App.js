import "./App.css";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const [todoList, setTodoList] = useState([]);

  const handleEnter = () => {
    const currentValue = inputRef.current.value;
    if (currentValue.split(" ").join("").length > 0) {
      setTodoList((previousList) => [...previousList, currentValue]);
    }

    inputRef.current.value = null;
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleEnter();
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to my</h1>
        <h2>To Dos</h2>
      </div>
      <div>
        <input
          placeholder="Enter To Dos"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleEnter}>Enter</button>
      </div>

      {todoList.map((todo, index) => (
        <div key={index}>
          <textarea value={todo} onChange={() => {}} /> <button>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
