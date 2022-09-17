import { MainFooter } from "components/MainFooter"
import { MainHeader } from "components/MainHeader"
import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div``

const MainBody = styled.div``

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props
  return (
    <Wrapper>
      <MainHeader/>
      <MainBody>
        { children }
      </MainBody>
      <MainFooter/>
    </Wrapper>
  )
}
