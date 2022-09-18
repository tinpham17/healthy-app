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
        <AchievementRate/>
        <BodyFatGraph data={bodyFatData}/>
      </Box>
      <MealNavbar/>
      <MealHistory data={mealHistoryData}/>
    </MainLayout>
  )
}
