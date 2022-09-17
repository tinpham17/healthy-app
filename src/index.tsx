import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RoutePath } from "constants/RoutePath"
import { TopPage } from "pages/TopPage"
import { MyRecordPage } from "pages/MyRecordPage"
import { ColumnPage } from "pages/ColumnPage"
import reportWebVitals from "./reportWebVitals"
import "styles/index.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.COLUMN_PAGE} element={<ColumnPage/>}/>
        <Route path={RoutePath.TOP_PAGE} element={<TopPage/>}/>
        <Route path={RoutePath.MY_RECORD_PAGE} element={<MyRecordPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
