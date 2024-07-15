import { styled } from "styled-components";
import IconsFooter from "../IconsFooter";

const StyledFooter = styled.footer`
  background-color:#04244F;;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <IconsFooter />
      <p>developed by Kin Ishii</p>
    </StyledFooter>
  );
}

export default Footer;
