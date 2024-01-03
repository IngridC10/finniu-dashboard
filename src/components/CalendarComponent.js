import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  // Estilo personalizado para las flechas
  const tileDisabled = ({ date, view }) => {
    if (view === 'month' && (date.getMonth() === new Date().getMonth() - 1 || date.getMonth() === new Date().getMonth() + 1)) {
      return (
        <div className="custom-arrow custom-calendar-arrow">
          {date.getMonth() === new Date().getMonth() - 1 ? '◄' : '►'}
        </div>
      );
    }
  };
  return (
    <div>
      <h1>Calendario</h1>
      <Calendar
        className="custom-calendar"
        onChange={onChange}
        value={date}
        tileDisabled={tileDisabled} // Utiliza la función para personalizar las flechas
      />
      <p>Fecha seleccionada: {date.toDateString()}</p>
    </div>
  );
}

export default CalendarComponent;