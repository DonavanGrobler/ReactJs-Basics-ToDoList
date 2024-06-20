import "./GoalList.css";

export const GoalList = (props) => {
  console.log(props);
  return (
    <div>
      <ul className="goal-list">
        {props.goals.map((goal) => {
          return <li key={goal.id}>{goal.text}</li>;
        })}
      </ul>
    </div>
  );
};
