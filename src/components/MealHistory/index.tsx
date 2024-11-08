import { displayMealType } from "functions/utils"
import { Meal } from "types/meal"
import styled from "styled-components"
import { ActionButton } from "components/ActionButton"

const Container = styled.div``

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
`

const Item = styled.div`
  height: 234px;
  position: relative;
`

const Info = styled.div`
  position: absolute;
  bottom: 0;  
  background: #FFCC21;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.15px;
  color: #FFFFFF;
  padding: 8px;
  min-width: 120px;
`

interface MealHistoryProps {
  data: Meal[]
}

export const MealHistory: React.FC<MealHistoryProps> = (props) => {
  const { data } = props
  return (
    <Container>
      <Wrapper>
        <Grid>
          {data.map((meal) =>
            <Item
              key={meal.id}
              style={{background: "url(" + meal.image + ")"}}
            >
              <Info>{meal.date}.{displayMealType(meal.type)}</Info>
            </Item>
          )}
        </Grid>
        <ActionButton>記録をもっと見る</ActionButton>
      </Wrapper>
    </Container>
  )
}
