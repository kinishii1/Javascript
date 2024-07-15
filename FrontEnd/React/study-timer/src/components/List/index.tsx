import {styled} from 'styled-components'
import Item from './Item'

const StyledList = styled.aside`
  border-radius: 4px;
  padding: 16px;
  width: 60%;
  margin: 32px auto;
  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: center;
    margin-bottom: 32px;
  }
  ul {
    list-style: none;
    overflow-y: scroll;
    max-height: 600px;
  }
`
type Task = {
  id: number;
  name: string;
  time: string;
  selected: boolean;
  completed: boolean;
};

type ListProps = {
  tasks: Task[]
  handleSelect: (task: Task) => void
}

function List({tasks, handleSelect}: ListProps) {
  return (
    <StyledList>
      <h2>Tarefas do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} task={task} handleSelect={handleSelect} />
        ))}
      </ul>
    </StyledList>
  )
}

export default List