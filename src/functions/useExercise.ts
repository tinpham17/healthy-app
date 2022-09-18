import { useState } from "react"
import { Exercise } from "types/excersise"
import client from "./client"

export const useExercise = () => {
  const [data, setData] = useState<Exercise[]>([])

  const fetch = async () => {
    const result = await client.get<Exercise[]>("/my-exercise.json")
    setData(result.data)
  }

  return {
    fetch,
    data
  }
}
