import { styled } from "styled-components";
import { toSecond } from "../../../common/utils/date";
import { useEffect, useState } from "react";
import Button from "../../Button";

const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 30px;
  color: #fff;
  margin: 20px 0;

  span {
    background-color: #5d677a;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
    font-size: 80px;
    margin: 0 10px;
  }

  span:nth-child(2) {
    background-color: transparent;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: none;
  }
  span:nth-child(4) {
    background-color: transparent;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: none;
  }

  button {
    background-color: #5d677a;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
    font-size: 30px;
    margin: 0 10px;
    border: none;
  }
`;

type TimerProps = {
  selectedItem: {
    time: string;
  };
};

function Timer({ selectedItem = 0 }: TimerProps) {
  const [time, setTime] = useState(toSecond(selectedItem.time));
  const [isRunning, setIsRunning] = useState(false);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    setTime(toSecond(selectedItem.time));
  }, [selectedItem]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(toSecond(selectedItem.time));
  };

  return (
    <StyledTimer>
      <span>{hours < 10 ? `0${hours}` : hours}</span>

      <span>:</span>

      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>

      <span>:</span>

      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>

      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
    </StyledTimer>
  );
}
export default Timer;
