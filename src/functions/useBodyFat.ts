import { useState } from "react"
import client from "./client"

export const useBodyFat = () => {
  const [data, setData] = useState<any[]>([])

  const fetch = async () => {
    const result = await client.get<any[]>("/body-fat-graph.json")
    setData(result.data)
  }

  return {
    fetch,
    data
  }
}
