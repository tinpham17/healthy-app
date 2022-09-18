import { Diary } from "types/diary"
import styled from "styled-components"
import { ActionButton } from "components/ActionButton"

const Container = styled.div`
  margin-top: 56px;
`

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Box = styled.div`
  text-align: center;
`

const Heading = styled.div`
  display: flex;
  padding-bottom: 8px;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.11px;
  color: #414141;
  text-transform: uppercase;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
`

const Item = styled.li`
  border: 2px solid #707070;
  color: #FFFFFF;
  position: relative;
  padding: 16px;
`

const ItemDate = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.09px;
  color: #414141;
`

const ItemTime = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.09px;
  color: #414141;
`

const ItemContent = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.06px;
  color: #414141;
  padding: 16px 0;
`

interface DiaryRecordProps {
  data: Diary[]
}

export const DiaryRecord: React.FC<DiaryRecordProps> = (props) => {
  const { data } = props
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title>My Diary</Title>
        </Heading>
        <Grid>
          {data.map((item) =>
            <Item key={item.id}>
              <ItemDate>{item.date}</ItemDate>
              <ItemTime>{item.time}</ItemTime>
              <ItemContent dangerouslySetInnerHTML={{ __html: item.content }}/>
            </Item>
          )}
        </Grid>
        <Box>
          <ActionButton>自分の日記をもっと見る</ActionButton>
        </Box>
      </Wrapper>
    </Container>
  )
}
