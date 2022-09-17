import { SubLinks } from "constants/SubLinks"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  height: 128px;
  background: #414141;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 45px;
  }
  li:last-child {
    margin-right: 0;
  }

  a {
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.033px;
    color: #FFFFFF;
  }
`

const Wrapper = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

export const MainFooter: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ul>
          {SubLinks.map((link, index) =>
            <li key={index}>
              <Link to={link.url}>{link.label}</Link>
            </li>
          )}
        </ul>
      </Wrapper>
    </Container>
  )
}
