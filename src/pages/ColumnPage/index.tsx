import { ColumnListing } from "components/ColumnListing"
import { ColumnNavbar } from "components/ColumnNavbar"
import { MainLayout } from "components/MainLayout"
import { useArticle } from "functions/useArticle"
import { useEffect } from "react"

export const ColumnPage: React.FC = () => {
  const { data, fetch } = useArticle()

  useEffect(() => {
    fetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <ColumnNavbar/>
      <ColumnListing data={data}/>
    </MainLayout>
  )
}
