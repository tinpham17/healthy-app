import { useState } from "react"
import { Meal } from "types/meal"
import client from "./client"

export const useMealHistory = () => {
  const [data, setData] = useState<Meal[]>([])

  const fetch = async () => {
    const result = await client.get<Meal[]>("/meal-history.json")
    console.log(result)
    setData(result.data)
  }

  return {
    fetch,
    data
  }
}
