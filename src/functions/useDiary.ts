import { useState } from "react"
import { Diary } from "types/diary"
import client from "./client"

export const useDiary = () => {
  const [data, setData] = useState<Diary[]>([])

  const fetch = async () => {
    const result = await client.get<Diary[]>("/my-diary.json")
    setData(result.data)
  }

  return {
    fetch,
    data
  }
}
