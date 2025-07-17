import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './CalendarPage.css'; // custom styles

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: 'Set up a board meeting',
      start: '2025-07-13T02:03:00',
      end: '2025-07-14T02:03:00',
      color: '#1976d2', // blue
    },
    {
      title: 'Investors Meeting',
      start: '2025-07-16T06:08:00',
      color: '#388e3c', // green
    },
    {
      title: 'UX Design Gathering',
      start: '2025-07-19T03:07:00',
      color: '#d32f2f', // red
    },
    {
      title: 'Call all developers',
      start: '2025-07-22T04:01:00',
      color: '#1976d2',
    },
  ]);

  return (
    <div className="calendar-wrapper">
      <h2>Calendar</h2>
      <p>Organize your schedule and events</p>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        height="auto"
      />
    </div>
  );
};

export default CalendarPage;
