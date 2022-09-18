import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 56px;
  margin-bottom: 56px;
`

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
`

const Item = styled.li`
  background: #2E2E2E;
  text-align: center;
  padding: 24px 0;
`

const Separator = styled.div`
  border-bottom: 1px solid #FFFFFF;
  width: 56px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;  
  text-align: center;
  letter-spacing: 0.11px;
  color: #FFCC21;
`

const Description = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
`

export const ColumnNavbar: React.FC = () => {
  const links = [
    {
      title: "RECOMMENDED COLUMN",
      description: "オススメ",
      to: ""
    },
    {
      title: "RECOMMENDED DIET",
      description: "ダイエット",
      to: ""
    },
    {
      title: "RECOMMENDED BEAUTY",
      description: "美容",
      to: ""
    },
    {
      title: "RECOMMENDED HEALTH",
      description: "健康",
      to: ""
    }
  ]
  return (
    <Container>
      <Wrapper>
        <Grid>
          {links.map((link, index) =>
            <Item key={index}>
              <Link to={link.to}>
                <Title>{link.title}</Title>
                <Separator/>
                <Description>{link.description}</Description>
              </Link>
            </Item>
          )}
        </Grid>
      </Wrapper>
    </Container>
  )
}
