import "./App.css";
import { GoalList } from "./components/GoalList";

function App() {
  const courseGoals = [
    { id: "1", text: "Eat" },
    { id: "2", text: "Code" },
    { id: "3", text: "Sleep" },
    { id: "4", text: "Repeat" },
  ];

  return (
    <>
      <div className="course-goals">
        <h2>Hello World</h2>
        <GoalList goals={courseGoals} />
      </div>
    </>
  );
}

export default App;
