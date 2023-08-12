import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(task, date);
    setTask("");
    setDate("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} method="post">
        <div className="text-center">
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            id="task"
          >
            Task
          </Input>
          <Input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
          >
            Date
          </Input>
        </div>
        <div className="mt-3">
          <Button type="submit" color="primary" size="sm" width="50">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
