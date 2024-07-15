import { styled } from "styled-components";

const tags = ["Estrelas", "Galáxias", "Lua", "Planetas", "Todas"];

const StyledLi = styled.li`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  padding: 10px 8px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 10px;
  border: 2px solid var(#C98CF1, #c98cf1);
  background: rgba(217, 217, 217, 0.3);
  
  &:hover {
    background: rgba(217, 217, 217, 0.5);
    color: #000;
    cursor: pointer;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

const StyledSearchTag = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

function SearchTag() {
  return (
    <StyledSearchTag> 
      <h2>Busque por tags</h2>
      <StyledUl>
        {tags.map((tag) => (
          <StyledLi>{tag}</StyledLi>
        ))}
      </StyledUl>
    </StyledSearchTag>
  );
}

export default SearchTag;
