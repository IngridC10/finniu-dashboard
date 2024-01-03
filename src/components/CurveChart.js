import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CurveChart = () => {
  const [isLineChart, setIsLineChart] = useState(true); // Estado para el tipo de gráfico

  const data = [
    { name: 'Enero', value: 10000 }, // Ejemplo de valores en soles
    { name: 'Febrero', value: 20000 },
    { name: 'Marzo', value: 15000 },
    { name: 'Abril', value: 25000 },
    { name: 'Mayo', value: 30000 },
    { name: 'Junio', value: 30000 },
  ];

  const handleLineChart = () => {
    setIsLineChart(true); // Cambia al gráfico de líneas
  };

  const handleBarChart = () => {
    setIsLineChart(false); // Cambia al gráfico de barras
  };

  // Función para formatear los números a formato de soles
  const formatYAxis = (value) => `S/ ${value}`;

  return (
    <ResponsiveContainer width="60%" height={400}>
      <div className="chart">
        <h1 >Mi rentabilidad</h1>
        <select >
          <option>Meses</option>
          <option>Semanas</option>
          <option>Años</option>
      
        </select>

        <div className='button-container'>
          <button onClick={handleLineChart}>G.Líneas</button>
          <button onClick={handleBarChart}>G.Barras</button>
        </div>
      </div>

      {isLineChart ? (
        <LineChart data={data}>
          {/* Configuración del gráfico de líneas */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} /> {/* Formatear etiquetas del eje Y */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#0D3A5C" strokeWidth={4} dot={{ fill: 'blue', stroke: '#A2E6FA', strokeWidth: 5, radius: 6 }} />
        </LineChart>
      ) : (
        <BarChart data={data}>
          {/* Configuración del gráfico de barras */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} /> {/* Formatear etiquetas del eje Y */}
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0D3A5C" />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

export default CurveChart;