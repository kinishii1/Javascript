import Form from "./components/Form";
import List from "./components/List";
import GlobalStyles from "./components/GlobalStyles";
import Stopwatch from "./components/Stopwatch";
import { styled } from "styled-components";
import { useState } from "react";


const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

type Task = {
  id: number;
  name: string;
  time: string;
  selected: boolean;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task | null>([
    {
      id: 0,
      name: "",
      time: "",
      selected: false,
      completed: false,
    },
  ]);

  const handleSelect = (task: Task) => {
    const newTasks = tasks.map((item) => ({
      ...item,
      selected: item.id === task.id ? !item.selected : false,
    }));
    setTasks(newTasks);
    setSelected(
      task.selected
        ? {
            id: 0,
            name: "",
            time: "",
            selected: false,
            completed: false,
          }
        : task
    );
  };

  const addTask = (name: string, time: string) => {
    const newTask = {
      id: Math.random(),
      name,
      time,
      selected: false,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <GlobalStyles />
      <FlexCol>
        <Form addTask={addTask} />
        <Stopwatch selectedItem={selected} />
        <List tasks={tasks} handleSelect={handleSelect} />
      </FlexCol>
    </>
  );
}

export default App;
