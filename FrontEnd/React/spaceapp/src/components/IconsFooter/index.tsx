import {styled} from 'styled-components'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const StyledIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
`;

function IconsFooter() {
  return (
    <StyledIcons>
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </StyledIcons>
  );
}

export default IconsFooter