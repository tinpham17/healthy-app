import RecordBodyJpg from "assets/images/record-body.jpg"
import RecordExerciseJpg from "assets/images/record-exercise.jpg"
import RecordDiaryJpg from "assets/images/record-diary.jpg"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  margin-top: 56px;
  margin-bottom: 56px;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px;
  }
  li {
    background: #FFCC21;
    height: 288px;
  }
  a {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 24px solid #FFCC21;
  }
`

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Title = styled.div`
  font-size: 23px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.225px;
  color: #FFCC21;
`

const Description = styled.div`
  margin-top: 12px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  background: #FF963C;
  padding: 2px 20px;
`

export const RecordNavbar: React.FC = () => {
  const links = [
    {
      title: "BODY RECORD",
      description: "自分のカラダの記録",
      image: RecordBodyJpg,
      to: ""
    },
    {
      title: "MY EXERCISE",
      description: "自分の運動の記録",
      image: RecordExerciseJpg,
      to: ""
    },
    {
      title: "MY DIARY",
      description: "自分の日記",
      image: RecordDiaryJpg,
      to: ""
    },
  ]
  return (
    <Container>
      <Wrapper>
        <ul>
          {links.map((link) =>
            <li>
              <Link
                to={link.to}
                style={{
                  background: `url(${link.image}), #2E2E2E`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                <Title>{link.title}</Title>
                <Description>{link.description}</Description>
              </Link>
            </li>
          )}
        </ul>
      </Wrapper>
    </Container>
  )
}
