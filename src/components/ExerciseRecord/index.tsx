import styled from "styled-components"
import { Exercise } from "types/excersise"

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
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Scroll = styled.div`
  height: 240px;
  overflow: auto;
  padding: 0 24px;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
`

const Item = styled.li`
  border-bottom: 1px solid #777777;
  color: #FFFFFF;
  padding-top: 8px;
  padding-bottom: 2px;
  padding-left: 16px;
  position: relative;
  &:before {
    content: "●";
    font-size: 6px;
    margin-top: 10px;
    position: absolute;
    left: 0;
  }
`

const ItemName = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.075px;
  color: #FFFFFF;
`

const ItemTime = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.09px;
  color: #FFCC21;
  margin-top: 8px;
`

const ItemKcal = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.075px;
  color: #FFCC21;
`

interface ExerciseRecordProps {
  data: Exercise[]
}

export const ExerciseRecord: React.FC<ExerciseRecordProps> = (props) => {
  const { data } = props
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title>My Exercise</Title>
          <Date>2021.05.21</Date>
        </Heading>
        <Scroll>
          <Grid>
            {data.map((item) =>
              <Item key={item.id}>
                <Box>
                  <ItemName>{item.name}</ItemName>
                  <ItemTime>{item.minutes} min</ItemTime>
                </Box>
                <Box>
                  <ItemKcal>{item.kcal}kcal</ItemKcal>
                </Box>
              </Item>
            )}
          </Grid>
        </Scroll>
      </Wrapper>
    </Container>
  )
}
