import React from 'react';
import "./PieChartComponent.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { formatNumber } from "../../Utils";

const PieChartComponent = (props) => {
  const COLORS = ['green', 'red'];

  const [pieChartData, setPieChartData] = React.useState(props.data ? props.data : []);

  React.useEffect(() => {
    setPieChartData(props.data);
  }, [props.data])

  // const CustomTooltip = ({ active, payload }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className='pie-chart-tooltip'>
  //         <table>
  //           <tbody>
  //             <tr>
  //               <td>Project</td>
  //               <td>{payload[0].name}</td>
  //             </tr>
  //             <tr>
  //               <td>Passed</td>
  //               <td>{formatNumber(payload[0].payload.passedPercentage)}%</td>
  //             </tr>
  //             <tr>
  //               <td>Failed</td>
  //               <td>{formatNumber(payload[0].payload.failedPercentage)}%</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     );
  //   }

  //   return null;
  // };

  return (
    <PieChart width={400} height={400} style={{ margin: "auto" }}>
      <Pie
        data={pieChartData}
        dataKey="value"
        // dataKey="passedPercentage"
        nameKey="name"
        cx={"50%"}
        cy={"50%"}
        outerRadius={150}
        innerRadius={100}
        fill="#8884d8"
        isAnimationActive={false}
        label={(data) => {
          // console.log(data)
          // return `${data.name}-${((data.percent)*100).toFixed(2)}%`;
          return `${data.name}-${formatNumber(((data.percent)*100))}%`;
          // return `${data.name}`;
        }}
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          // <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
        ))}
      </Pie>
      {/* <Legend verticalAlign="bottom" height={120} /> */}
      {/* <Tooltip
        content={<CustomTooltip />}
        position={{ x: 'coordinate', y: 'coordinate' }}
        coordinate={{ x: 200, y: 200 }}
      /> */}
      {/* <Tooltip /> */}
    </PieChart>
  )
};

export default PieChartComponent;