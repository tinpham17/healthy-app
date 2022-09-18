import { useState } from "react"
import { Article } from "types/article"
import client from "./client"

export const useArticle = () => {
  const [data, setData] = useState<Article[]>([])

  const fetch = async () => {
    const result = await client.get<Article[]>("/articles.json")
    setData(result.data)
  }

  return {
    fetch,
    data
  }
}
