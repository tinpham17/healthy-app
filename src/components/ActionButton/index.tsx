import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.div`
  button {
    text-align: center;
    margin-top: 28px;
    margin-bottom: 64px;
    background: linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    border: none;
    height: 56px;
    border-radius: 4px;
    min-width: 296px;
  }
`

interface ActionButtonProps {
  children: ReactNode
  [key: string]: any
}

export const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Container>
      <button {...rest}>
        {children}
      </button>
    </Container>
  )
}
