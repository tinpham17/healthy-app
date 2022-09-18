import { AchievementRate } from "components/AchievementRate"
import { BodyFatGraph } from "components/BodyFatGraph"
import { MainLayout } from "components/MainLayout"
import { MealHistory } from "components/MealHistory"
import { MealNavbar } from "components/MealNavbar"
import { useBodyFat } from "functions/useBodyFat"
import { useMealHistory } from "functions/useMealHistory"
import { useEffect } from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  align-items: center;
`

const Graph = styled.div`
  width: 100%;
  height: 316px;
  background: #2E2E2E;
  padding: 8px 24px;
  box-sizing: border-box;
`

export const TopPage: React.FC = () => {
  const { data: mealHistoryData, fetch: fetchMealHistoryData } = useMealHistory()
  const { data: bodyFatData, fetch: fetchBodyFatData } = useBodyFat()

  useEffect(() => {
    fetchMealHistoryData()
    fetchBodyFatData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <Box>
        <AchievementRate
          date="05/21"
          percentage={75}
        />
        <Graph>
          <BodyFatGraph data={bodyFatData}/>
        </Graph>
      </Box>
      <MealNavbar/>
      <MealHistory data={mealHistoryData}/>
    </MainLayout>
  )
}
