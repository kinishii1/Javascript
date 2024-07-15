import { styled } from "styled-components";
import searchIcon from "./search(1).png";

const TextInputStyled = styled.div`
  width: 600px;
  height: 50px;
  position: relative;
  img {
    position: absolute;
    right: 20px;
    top: 20%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  background-color: transparent;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  color: #041833;
  &::placeholder {
    color: #fff;
    font-weight: 700;
  }
`;

function TextInput() {
  return (
    <TextInputStyled>
      <Input type="text" placeholder="O que você procura?"/>
      <img src={searchIcon} alt="" />
    </TextInputStyled>
  );
}

export default TextInput;
