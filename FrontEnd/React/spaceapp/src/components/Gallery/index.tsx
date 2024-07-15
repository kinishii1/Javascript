import Icons from "../Icons";
import { styled } from "styled-components";
import { useState } from "react";

const DescriptionContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
`;

const Styledh4 = styled.h4`
  width: 100%;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const StyledCard = styled.div`
  width: 450px;
  height: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001634;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .photo {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

const StyledGallery = styled.div`
  width: 100%;   
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  margin: 2rem 0;
  gap: 2rem;
`;

const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

Card.defaultProps = {
  img: 1,
};

type CardProps = {
  img: number;
  handleimageClick?: (id: string ) => void;
  key: string;
};


function Card(props: CardProps) {
  const [imageId, setImageId] = useState("");

  const handleImageClick = (id: string) => {
    setImageId(id);
  }
  
  return (
    <StyledCard onClick={() => handleImageClick(props.key)}>
      <img id={imageId} className='photo' src={`./imagens/galeria/foto-${props.img}.png`} />
      <StyledInfos>
        <Styledh4>Nome da foto</Styledh4>
        <DescriptionContainer>
          <p>Fonte/fotógrafo/satélite</p>
          <Icons />
        </DescriptionContainer>
      </StyledInfos>
    </StyledCard>
  );
}
function Gallery({ handleImageClick }: { handleImageClick: (id: string) => void }) {

  return (
    <StyledGallery>
      {Array.from({ length: 10 }, (_, i) => (
        <Card 
        img={i + 1} 
        key={i.toString()}
        handleimageClick={handleImageClick}
        />
      ))}
    </StyledGallery>
  );
}

export default Gallery;
