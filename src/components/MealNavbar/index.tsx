import { ReactComponent as IconKnife } from "assets/images/icon-knife.svg"
import { ReactComponent as IconCup } from "assets/images/icon-cup.svg"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    padding: 36px 0;
  }
  li {
    width: 134px;
    height: 116px;
    background: linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(-90deg);
    margin-right: 84px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    transform: rotate(90deg);
  }
`

export const MealNavbar: React.FC = () => {
  const links = [
    {
      label: "Morning",
      icon: IconKnife,
      to: ""
    },
    {
      label: "Lunch",
      icon: IconKnife,
      to: ""
    },
    {
      label: "Dinner",
      icon: IconKnife,
      to: ""
    },
    {
      label: "Snack",
      icon: IconCup,
      to: ""
    }
  ]
  return (
    <Container>
      <ul>
        {links.map((link, index) =>
          <li key={index}>
            <Link to={link.to}>
              {<link.icon/>}
              {link.label}
            </Link>
          </li>
        )}
      </ul>
    </Container>
  )
}
