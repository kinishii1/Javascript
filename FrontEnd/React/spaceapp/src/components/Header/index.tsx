import TextInput from "../TextInput";

import { styled } from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 190px;
  align-items: center;
  padding: 0 100px;
  .logo {
    width: 300px;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <img className='logo' src="/imagens/logo.png" alt="" />
      <TextInput />
    </HeaderStyled>
  );
}

export default Header;
