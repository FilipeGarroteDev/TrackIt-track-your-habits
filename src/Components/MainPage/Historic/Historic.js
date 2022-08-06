import { Comment, Title } from "../../common"
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';
import { getHistoric } from "../../../services/trackit";
import dayjs from "dayjs"
import "dayjs/locale/pt-br"

export default function Historic(){
  const [date, setDate] = useState(new Date());
  const [habitsHistoric, setHabitsHistoric] = useState([]);


  useEffect(() => {
    const promise = getHistoric();
    promise.then(res => {
      setHabitsHistoric(res.data)
    })
  }, [])

  return(
    <>
      <Title>Histórico</Title>
      <CalendarWrapper>
        <Calendar 
          calendarType="US"
          locale="pt-br" 
          onChange={setDate} 
          date={date}
          formatDay={(locale, date) => dayjs(date).format("DD")}
        />
      </CalendarWrapper>
    </>
  )
}

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  .react-calendar{
    width: 100%;
    max-width: 500px;
    height: 400px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
  }
  
  .react-calendar__month-view__weekdays {
    text-decoration: underline;
  }

  .react-calendar__month-view__days {
    height: 290px;
  }

  .react-calendar__month-view__days__day {
    font-size: 18px;
  }

  .react-calendar__tile--active {
  background: #006edc;
  color: white;
  clip-path: circle();
}

.react-calendar__tile--now {
  background: #ffff76;
  clip-path: circle();
}

`
