import { styled } from "styled-components";

const listitems = [
  { value: "Inicio", img: "home-inativo" },
  { value: "Mais vistas", img: "mais-vistas-inativo" },
  { value: "Mais curtidas", img: "mais-curtidas-inativo" },
  { value: "Novas", img: "novas-inativo" },
  { value: "Surpreenda-me", img: "surpreenda-me-inativo" },
];

type ListItemProps = {
  img: string;
  value: string;
};

const StyledLi = styled.li`
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ffffff10;
  }

`;

function ListItem({ img, value }: ListItemProps) {
  return (
    <StyledLi>
      <img src={`./icones/${img}.png`} alt="" />
      {value}
    </StyledLi>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

function AsideLeft() {
  return (
    <StyledNav>
      <StyledUl>
        {listitems.map((item) => (
          <ListItem key={item.value} img={item.img} value={item.value} />
        ))}
      </StyledUl>
    </StyledNav>
  );
}

export default AsideLeft;
