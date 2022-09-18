import { Article } from "types/article"
import { ActionButton } from "components/ActionButton"
import styled from "styled-components"

const Container = styled.div``

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
`

const Box = styled.div`
  text-align: center;
`

const Item = styled.div`
  position: relative;
`

const ItemImage = styled.div`
  height: 234px;
  position: relative;
`

const ItemName = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.15px;
  min-width: 120px;
  padding-top: 8px;
`

const ItemDate = styled.div`
  position: absolute;
  bottom: 0;
  background: #FFCC21;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: #FFFFFF;
  padding: 0 8px;
`

const ItemTags = styled.div`
  display: flex-wrap;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.06px;
  color: #FF963C;
  padding-bottom: 8px;
  span {
    padding-right: 8px;
    &:last-of-type {
      padding-right: 0;
    }
  }
`

interface ColumnListingProps {
  data: Article[]
}

export const ColumnListing: React.FC<ColumnListingProps> = (props) => {
  const { data } = props
  return (
    <Container>
      <Wrapper>
        <Grid>
          {data.map((item) =>
            <Item key={item.id}>
              <ItemImage
                style={{
                  background: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <ItemDate>{item.date}</ItemDate>
              </ItemImage>
              <ItemName>{item.name}</ItemName>
              <ItemTags>
                {item.tags.map((tag) =>
                  <span>{tag}</span>
                )}
              </ItemTags>
            </Item>
          )}
        </Grid>
        <Box>
          <ActionButton>コラムをもっと見る</ActionButton>
        </Box>
      </Wrapper>
    </Container>
  )
}
