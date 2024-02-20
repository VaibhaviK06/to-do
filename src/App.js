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
        <h1 className="Heading1">Welcome to my</h1>
        <h2 className="Heading2">To Dos</h2>
      </div>
      <div className="InputHolder">
        <input
          className="InputContent"
          placeholder="Enter To Dos"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button className="EnterButton" onClick={handleEnter}>
          Enter
        </button>
      </div>

      {todoList.map((todo, index) => (
        <div className="InputHolder2" key={index}>
          <input value={todo} className='InputContent2' onChange={() => {}} />
          <button className="DeleteButton"
            onClick={() => {
              setTodoList(todoList.filter((item) => item !== todo));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
