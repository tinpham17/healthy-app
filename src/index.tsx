import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RoutePath } from "constants/RoutePath"
import { TopPage } from "pages/TopPage"
import { MyRecordPage } from "pages/MyRecordPage"
import { ColumnPage } from "pages/ColumnPage"
import { RecoilRoot } from "recoil"
import reportWebVitals from "./reportWebVitals"
import "styles/index.css"
import "react-circular-progressbar/dist/styles.css"

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.COLUMN_PAGE} element={<ColumnPage/>}/>
          <Route path={RoutePath.TOP_PAGE} element={<TopPage/>}/>
          <Route path={RoutePath.MY_RECORD_PAGE} element={<MyRecordPage/>}/>
          <Route path={RoutePath.CHALLENGE_PAGE} element={<TopPage/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
