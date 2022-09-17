import { ReactComponent as LogoSvg } from "assets/images/logo.svg"
import { ReactComponent as MenuSvg } from "assets/images/icon-menu.svg"
import { MainLinks } from "constants/MainLinks"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  background: #414141;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
  height: 64px;
`

const Wrapper = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Box = styled.ul`
  display: flex;
  align-items: center;
`

const Navbar = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: 45px;
  }
  li:last-child {
    margin-right: 0;
  }

  a {
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 8px;
  }
`

const Menu = styled.div`
  margin-left: 70px;
  display: flex;
  align-items: center;
`

export const MainHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LogoSvg/>
        <Box>
          <Navbar>
            {MainLinks.map((link) =>
              <li>
                <Link to={link.url}>
                  {<link.icon/>}
                  <span>{link.label}</span>
                </Link>
              </li>
            )}
          </Navbar>
          <Menu>
            <MenuSvg/>
          </Menu>
        </Box>
      </Wrapper>
    </Container>
  )
}
