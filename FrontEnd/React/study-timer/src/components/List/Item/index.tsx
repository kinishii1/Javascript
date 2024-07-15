import { styled } from "styled-components";

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;

  h3 {
    font-size: 30px;
    font-weight: 600;
  }
  span {
    font-size: 30px;
  }

  &.selected {
    background-color: #75879f;
    color: #fff;
  }
`;

type Task = {
  id: number;
  name: string;
  time: string;
  selected: boolean;
  completed: boolean;
};

type ItemProps = {
  task: Task;
  handleSelect: (task: Task) => void;
};



function Item({ task, handleSelect }: ItemProps) {
  console.log(task);
  
  return (
    <StyledItem
      className={task.selected ? "selected" : ""}
      onClick={() => handleSelect(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </StyledItem>
  );
}

export default Item;
