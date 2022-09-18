import { BodyFatGraph } from "components/BodyFatGraph"
import { ExerciseRecord } from "components/ExerciseRecord"
import { MainLayout } from "components/MainLayout"
import { RecordNavbar } from "components/RecordNavbar"
import { useExercise } from "functions/useExercise"
import { useEffect } from "react"

export const MyRecordPage: React.FC = () => {
  const { data, fetch } = useExercise()

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <MainLayout>
      <RecordNavbar/>
      <BodyFatGraph/>
      <ExerciseRecord data={data}/>
    </MainLayout>
  )
}
