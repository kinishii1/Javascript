import { styled } from "styled-components";

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .photo {
    margin-top: 2rem;
    width: 1156px;
    height: 660.571px;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .close-icon {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
const ModalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1156px;
  height: 80px;
  background-color: #001634;
  padding: 0 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
`;

function Modal() {
  return (
    <StyledModal>
      <img className="close-icon" src="./icones/fechar.png" alt="" />
      <img className="photo" src="./imagens/galeria/foto-1.png" alt="" />
      <ModalInfo>
        <div>
 
          <h4>Nome da foto</h4>
          <p>Fonte/fotógrafo/satélite</p>
        </div>
        <img src="./icones/favorito.png" alt="" />
      </ModalInfo>
    </StyledModal>
  );
}

export default Modal;
