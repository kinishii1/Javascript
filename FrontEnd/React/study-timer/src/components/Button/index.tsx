import { styled } from 'styled-components'

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

function Button({children, type, onClick}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type}>{children}</StyledButton>
  )
}

export default Button