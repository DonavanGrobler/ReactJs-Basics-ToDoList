import "./ToDoList.css";

export const ItemList = (props) => {
  console.log(props);
  return (
    <div>
      <ul className="todo-list">
        {props.items.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};
