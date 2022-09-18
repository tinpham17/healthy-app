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
    background: transparent;
  }
  .label {
    color: #fff;
  }
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
          <XAxis
            dataKey="name"
            className="label"
            tick={{
              fontSize: 10
            }}
            tickSize={0}
            axisLine={false}
            stroke="#fff"
            tickMargin={8}
          />
          <Tooltip />
          <Line
            dataKey="v1"
            stroke="#FFCC21"
            strokeWidth={3}
          />
          <Line
            dataKey="v2"
            stroke="#8FE9D0"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}
