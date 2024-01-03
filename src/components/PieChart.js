import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = () => {
    const data = [
      ["Task", "Inversiones"],
      ["1 Inversión en curso", 20],
      ["2 Inversiones finalizadas", 50],
      ["1 Inversión en proceso", 20],
    ];
  
    const options = {
      title: "Mi Historial",
      titleTextStyle: {
        fontSize: 24, 
      },
      pieHole: 0.87, 
      slices: [
        { color: '#A2E6FA' }, 
        { color: '#0D3A5C'},  
        { color: '#9381FF' },  
      ],
    };
  
    return (
      <div style={{position:'relative',width:'100%'}}>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

         <div style={{position:'absolute',top:'45%',left:'31%',textAlign:'center',fontSize:'24px',color:'black',width:'100px'}}>Inversiones 4</div>
      </div>
    );
  };
  
  export default PieChart;