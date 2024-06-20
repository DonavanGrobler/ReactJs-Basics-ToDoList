import "./App.css";
import { ItemList } from "./components/ToDoList/ToDoList";
import { NewItem } from "./components/NewItem/NewItem";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: "1", text: "Eat" },
    { id: "2", text: "Code" },
    { id: "3", text: "Sleep" },
    { id: "4", text: "Repeat" },
  ]);

  const addNewItemHandler = (newItem) => {
    // setToDoList(toDoList.concat(newItem));
    setToDoList((prevToDoList) => {
      return prevToDoList.concat(newItem);
    });
  };

  return (
    <>
      <div className="todo-list">
        <h2>To Do List</h2>
        <NewItem onAddItem={addNewItemHandler} />
        <ItemList items={toDoList} />
      </div>
    </>
  );
}

export default App;
