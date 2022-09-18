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
        {children}
      </Wrapper>
    </Container>
  )
}
