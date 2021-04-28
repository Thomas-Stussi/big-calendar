import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const myEventsList = [
  {
    allDay: false,
    end: new Date('December 10, 2017 11:13:00'),
    start: new Date('December 09, 2017 11:13:00'),
    title: 'hi',
  },
  {
    allDay: true,
    end: new Date('December 09, 2017 11:13:00'),
    start: new Date('December 09, 2017 11:13:00'),
    title: 'All Day Event',
  },
]

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar;
