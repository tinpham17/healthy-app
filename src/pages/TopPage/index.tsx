import { AchievementRate } from "components/AchievementRate"
import { BodyFatGraph } from "components/BodyFatGraph"
import { MainLayout } from "components/MainLayout"
import { MealHistory } from "components/MealHistory"
import { MealNavbar } from "components/MealNavbar"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  align-items: center;
`

export const TopPage: React.FC = () => {
  return (
    <MainLayout>
      <Box>
        <AchievementRate/>
        <BodyFatGraph/>
      </Box>
      <MealNavbar/>
      <MealHistory/>
    </MainLayout>
  )
}
