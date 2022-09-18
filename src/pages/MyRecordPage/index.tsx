import { BodyFatGraph } from "components/BodyFatGraph"
import { DiaryRecord } from "components/DiaryRecord"
import { ExerciseRecord } from "components/ExerciseRecord"
import { MainLayout } from "components/MainLayout"
import { RecordNavbar } from "components/RecordNavbar"
import { useDiary } from "functions/useDiary"
import { useExercise } from "functions/useExercise"
import { useEffect } from "react"

export const MyRecordPage: React.FC = () => {
  const { data: myExerciseData, fetch: fetchMyExercise } = useExercise()
  const { data: myDiaryData, fetch: fetchMyDiary } = useDiary()

  useEffect(() => {
    fetchMyExercise()
    fetchMyDiary()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <RecordNavbar/>
      <BodyFatGraph/>
      <ExerciseRecord data={myExerciseData}/>
      <DiaryRecord data={myDiaryData}/>
    </MainLayout>
  )
}
