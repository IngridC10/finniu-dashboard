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
      pieHole: 0.87, // Para crear un donut chart
      slices: [
        { color: '#A2E6FA' },  // Color para "1 Inversión en curso"
        { color: '#0D3A5C'},  // Color para "2 Inversiones finalizadas"
        { color: '#9381FF' },  // Color para "1 Inversión en proceso"
      ],
    };
  
    return (
      <div className="chart-container">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

        <div className="center-text">Inversiones 4</div>
      </div>
    );
  };
  
  export default PieChart;