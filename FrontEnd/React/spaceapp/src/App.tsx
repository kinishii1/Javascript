import GlobalStyles from "./components/GlobalStyles";
import { styled } from "styled-components";
import BackgroundGradient from "./components/BackgroundGradient";
import Header from "./components/Header";
import AsideLeft from "./components/AsideLeft";
import banner from "./assets/banner.png";
import SearchTag from "./components/SearchTag";
import Gallery from "./components/Gallery";
import AsideRight from "./components/AsideRight";
import Footer from "./components/Footer";

const StyledHero = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  width: 100%;
  height: 328px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const StyledHeroTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  width: 300px;
`;

const Flex = styled.div`
  display: flex;
  padding: 0 2rem;
  gap: 2rem;
`;

const ControlDivLeft = styled.div`
  width:12%;`

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles />
      {/* <Modal /> */}
      <Header />
      <Flex>
        <AsideLeft />
        <StyledHero>
          <StyledHeroTitle>
            A galeria mais completa de fotos do espaço!
          </StyledHeroTitle>
        </StyledHero>
      </Flex>
      <Flex>
        <ControlDivLeft />
        <SearchTag />
      </Flex>
      <Flex>
        <Gallery handleImageClick={ () => {} }/>
        <AsideRight />
      </Flex>
      <Footer />
    </BackgroundGradient>
  );
}

export default App;
