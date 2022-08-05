import styled from "styled-components"
import { removeHabit } from "../../../services/trackit"

export default function CreatedHabit({name, days, id, refreshList, setRefreshList }){
  const week = ["D", "S", "T", "Q", "Q", "S", "S"]

  function deleteHabit(){
    if(window.confirm("Você tem certeza que quer deletar esse hábito?")){
      const promise = removeHabit(id)
      promise.then(res => {
        setRefreshList(!refreshList)
      })
    }
  }

  return (
    <HabitCard>
      <HabitName>{name}</HabitName>
      <WeekContainer>
        {week.map((day, index) => days.includes(index) ? <StyledDay key={index} selected={true}>{day}</StyledDay> : <StyledDay key={index} selected={false}>{day}</StyledDay> )}
      </WeekContainer>
      <ion-icon onClick={deleteHabit} name="trash-outline"></ion-icon>
    </HabitCard>
  )
}

const HabitCard = styled.div`
  height: 91px;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
  position: relative;

  ion-icon{
    width: 17px;
    height: 17px;
    position: absolute;
    top: 11px;
    right: 10px;
    color: #666666;
  }
`

const WeekContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 30px;
`

const HabitName = styled.h3`
  font-size: 20px;
  color: #666666;
`


const StyledDay = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #D4D4D4;
  border-radius: 5px;
  color: ${(props) => props.selected ? "white" : "#dbdbdb"};
  background-color: ${(props) => props.selected ? "#cfcfcf" : "white"};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`