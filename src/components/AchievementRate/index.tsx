import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import styled from "styled-components"

const Container = styled.div`
  flex: 0 0 540px;
  height: 316px;
  width: 540px;
  background: url("/images/d01.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 180px;
`

const Value = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  text-shadow: 0px 0px 6px #FC7400;
  strong {
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-shadow: 0px 0px 6px #FCA500;
  }
`

interface AchievementRateProps {
  date: string
  percentage: number
}

export const AchievementRate: React.FC<AchievementRateProps> = (props) => {
  const { date, percentage } = props
  return (
    <Container>
      <Wrapper>
        <CircularProgressbarWithChildren
          strokeWidth={2}
          styles={{
            trail: {
              stroke: "transparent",
            },
            path: {
              stroke: "#fff",
              filter: "drop-shadow(0 0 2px #FC7400)"
            }
          }}
          value={percentage}
        >
          <Value>
            {date} <strong>{percentage}%</strong>
          </Value>
        </CircularProgressbarWithChildren>
      </Wrapper>
    </Container>
  )
}
