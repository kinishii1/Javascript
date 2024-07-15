// width 30%
import { styled } from "styled-components";

const StyledAsideRight = styled.div`
  width: 11%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const AsideRightBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: #C98CF1 2px solid;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
`;

function AsideRight() {
  return (
    <StyledAsideRight>
      <h1>Populares</h1>
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={`./imagens/populares/foto-${index + 1}.png`}
          alt=""
        />
      ))}
      <AsideRightBtn>Ver mais</AsideRightBtn>
    </StyledAsideRight>
  );
}

export default AsideRight;
