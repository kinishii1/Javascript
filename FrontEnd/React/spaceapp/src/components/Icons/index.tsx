import {styled} from "styled-components";

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`;

function Icons() {
  return (
    <StyledIcons>
      <img src="./icones/favorito.png" />
      <img src="./icones/expandir.png" />
    </StyledIcons>
  );
}

export default Icons;
