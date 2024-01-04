import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CurveChartComponent = () => {
  const [isLineChart, setIsLineChart] = useState(true); // Estado para el tipo de gráfico

  const data = [
    { name: 'Febrero', value: 10000 }, 
    { name: 'Febrero', value: 20000 },
    { name: 'Marzo', value: 15000 },
    { name: 'Abril', value: 25000 },
    { name: 'Mayo', value: 30000 },
    { name: 'Junio', value: 30000 },
  ];

  const handleLineChart = () => {
    setIsLineChart(true); 
  };

  const handleBarChart = () => {
    setIsLineChart(false); 
  };

  const formatYAxis = (value) => `S/ ${value}`;

  return (

    <ResponsiveContainer width="60%" height={400}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 >Mi rentabilidad</h1>
        <select >
          <option>Meses</option>
          <option>Semanas</option>
          <option>Años</option>
      
        </select>

        <div style={{display:'flex',gap:'20px'}}className='button-container'>
          <button onClick={handleLineChart}>G.Líneas</button>
          <button onClick={handleBarChart}>G.Barras</button>
        </div>
      </div>

      {isLineChart ? (
        <LineChart data={data}>
      
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} /> 
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="rgba(13, 58, 92, 1)" strokeWidth={8} strokeOpacity={0.25} />
          <Line type="monotone" dataKey="value" stroke="rgba(13, 58, 92, 1)" strokeWidth={4} />
        
        </LineChart>
      ) : (
        <BarChart data={data}>
   
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} /> 
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0D3A5C" />
        </BarChart>
      )}
    </ResponsiveContainer>
  
  );
};

export default CurveChartComponent;