import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 56px;
`

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background: #414141;
  padding: 24px 0;
`

const Heading = styled.div`
  display: flex;
  padding: 0 24px;
  padding-bottom: 8px;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.15px;
  color: #FFFFFF;
  text-transform: uppercase;
  max-width: 96px;
`

const Date = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.11px;
  color: #FFFFFF;
`

const Box = styled.div`
  display: flex-wrap;
  padding: 0 32px;
`

const Toggle = styled.button<{active?: boolean}>`
  background: ${props => props.active ? "#FFCC21" : "#FFFFFF"};
  border-radius: 11px;
  height: 24px;
  border: none;
  min-width: 56px;
  margin-right: 16px;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.075px;
  color: ${props => props.active ? "#fff" : "#FFCC21"};
  &:last-of-type {
    margin-right: 0;
  }
`

const Graph = styled.div`
  box-sizing: border-box;
  padding: 0 32px;
`

interface BodyRecordProps {
  children: ReactNode
}

export const BodyRecord: React.FC<BodyRecordProps> = (props) => {
  const { children } = props
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title>Body Record</Title>
          <Date>2021.05.21</Date>
        </Heading>
        <Graph>
          {children}
        </Graph>
        <Box>
          <Toggle>日</Toggle>
          <Toggle>週</Toggle>
          <Toggle>月</Toggle>
          <Toggle active>年</Toggle>
        </Box>
      </Wrapper>
    </Container>
  )
}
