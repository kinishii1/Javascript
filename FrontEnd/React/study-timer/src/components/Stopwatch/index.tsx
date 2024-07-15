import Timer from "./Timer"
import { styled } from 'styled-components'
import { toSecond } from "../../common/utils/date"

console.log(toSecond('01:00:00'))

const StyledStopwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  width: 80%;
  padding: 20px;
  border-radius: 8px;

  background-color: #75879f;

  p {
    font-size: 30px;
    color: #fff;
  }
`

type StopwatchProps = {
  selectedItem: {
    time: string;
  }
}

function Stopwatch({ selectedItem }: StopwatchProps) {
  return (
    <StyledStopwatch>
      <p>Selecione uma tarefa para iniciar o cronometro</p>
      <Timer selectedItem={selectedItem} />
    </StyledStopwatch>
  )
}
export default Stopwatch