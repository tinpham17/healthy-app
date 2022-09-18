import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import styled from "styled-components"

const Container = styled.div`
  .container {
    background: #2E2E2E;
  }

  width: 100%;
  height: 316px;
  background: #2E2E2E;
  padding: 8px 24px;
  box-sizing: border-box;
`

interface BodyFatGraphProps {
  data: any[]
}

export const BodyFatGraph: React.FC<BodyFatGraphProps> = (props) => {
  const { data } = props

  return (
    <Container>
      <ResponsiveContainer
        className="container"
        width="100%"
        height={300}
      >
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid
            horizontal={false}
          />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line
            dataKey="v1"
            stroke="#FFCC21"
            strokeWidth={2}
          />
          <Line
            dataKey="v2"
            stroke="#8FE9D0"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}
