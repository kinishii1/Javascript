import { useState } from "react";
import Button from "../Button";
import { styled } from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  margin: 32px auto;
  background-color: #75879f;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  label {
    font-size: 30px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 8px;
    letter-spacing: 1px;
  }
  input {
    background-color: #5d677a;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.5;
    color: #ffff;
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3) inset;
  }
  input::placeholder {
    color: #fff;
  }

  button {
    margin-top: 16px;
    width: 30%;
    align-self: center;
  }
`;

type FormProps = {
  addTask: (name: string, time: string) => void;
};

function Form({addTask}: FormProps) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('00:00:00');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(name, time);
    setName('');
    setTime('00:00:00');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Adicione um novo estudo</label>
        <input 
        type="text" 
        id="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="O que voce quer estudar" />
      </div>
      <div>
        <label htmlFor="time">Tempo</label>
        <input 
        type="time" 
        id="time"
        step='1'
        min="00:00:00" 
        max="1:30:00"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        />
      </div>
      <Button type='submit'>Adicionar</Button>
    </StyledForm>
  );
}

export default Form;
