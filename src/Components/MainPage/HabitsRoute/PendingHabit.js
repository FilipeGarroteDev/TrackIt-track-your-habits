import { useState } from "react"
import styled from "styled-components"


export default function PendingHabit({setCreateHabit}){
  const week = ["Q", "S", "T", "Q", "Q", "S", "S"]

  return(
    <HabitCard>
      <input type="text" placeholder="nome do hábito"/>
      <WeekContainer>
        {week.map((day, index) => <Day key={index} day={day} />)}
      </WeekContainer>
      <Buttons>
        <span onClick={() => setCreateHabit(false)}>Cancelar</span>
        <button>Salvar</button>
      </Buttons>
    </HabitCard>
  )
}

function Day({day}){
  const [selectedDay, setSelectedDay] = useState(false)

  return (
    <>
      <StyledDay selectedDay={selectedDay} onClick={() => setSelectedDay(!selectedDay)}>{day}</StyledDay>
    </>
  )

}



const HabitCard = styled.div`
  height: 180px;
  background-color: white;
  border-radius: 5px;
  padding: 18px;

  input{
    width: 100%;
    height: 45px;
    border: 1px solid #D4D4D4;
    font-size: 20px;
    padding-left: 11px;
    border-radius: 5px;
    color: #666666;
    margin-bottom: 8px;

    &::placeholder{
      color: #DBDBDB;
    }
  }
`

const WeekContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 30px;
`

const StyledDay = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #D4D4D4;
  border-radius: 5px;
  color: ${(props) => props.selectedDay ? "white" : "#dbdbdb"};
  background-color: ${(props) => props.selectedDay ? "#cfcfcf" : "white"};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 23px;

  span{
    color: #52B6FF;
    font-size: 16px;
  }

  button{
    width: 84px;
    height: 35px;
    border: none;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
  }
`