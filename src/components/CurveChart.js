import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CurveChart = () => {
  const data = [
    { name: 'Enero', value: 10 },
    { name: 'Febrero', value: 20 },
    { name: 'Marzo', value: 15 },
    { name: 'Abril', value: 25 },
    { name: 'Mayo', value: 30 },
    { name: 'Junio', value: 30 },
  ];

  return (
    <ResponsiveContainer width="60%" height={300}>
    <h1 className='rentability'>Mi rentabilidad</h1>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#0D3A5C" strokeWidth={4} dot={{ fill: 'blue', stroke: '#A2E6FA', strokeWidth: 5,radius:6}}></Line>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#808080" // Color más claro para el sombreado
          strokeWidth={2} // Ancho mayor para el sombreado
          dot={false} // No se muestran puntos en el sombreado
          isAnimationActive={false} // Desactiva la animación para el sombreado
        />
        
        
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurveChart;