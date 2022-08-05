import { useState } from "react"
import { Bars } from "react-loader-spinner"
import styled from "styled-components"
import { postHabit } from "../../../services/trackit"


export default function PendingHabit({setCreateHabit, refreshList, setRefreshList}){
  const week = ["Q", "S", "T", "Q", "Q", "S", "S"]
  const [habitName, setHabitName] = useState("")
  const [days, setDays] = useState([])
  const [savedHabit, setSavedHabit] = useState(false)

  function sendHabit(){
    setSavedHabit(true)
    const habitObject = {
      name: habitName,
      days
    }

    const promise = postHabit(habitObject);
    promise.then(res => {
      setCreateHabit(false)
      setRefreshList(!refreshList)
    })
  }


  return(
    <HabitCard>
      <input 
        type="text" 
        placeholder="nome do hábito"
        value={habitName}
        onChange={e => setHabitName(e.target.value)}
        disabled={savedHabit ? true : false}
      />
      <WeekContainer>
        {week.map((day, index) => <Day key={index} day={day} setDays={setDays} days={days} index={index} savedHabit={savedHabit}/>)}
      </WeekContainer>
      <Buttons savedHabit={savedHabit}>
        <span onClick={() => setCreateHabit(false)}>Cancelar</span>
        {savedHabit ? <button><Bars width={30} color="white" /></button> : <button onClick={sendHabit}>Salvar</button>}

      </Buttons>
    </HabitCard>
  )
}

function Day({day, setDays, days, index, savedHabit}){
  const [selectedDay, setSelectedDay] = useState(false)

  function handleDays(){
    setSelectedDay(!selectedDay)
    const aux = days.filter(value => value === index)

    if(!savedHabit){
      if(!selectedDay){
        if(aux.length === 0){
          setDays([
            ...days,
            index
          ])
        }
      } else {
        const indexAux = days.findIndex(value => value === aux[0]);
        const filteredDays = days.filter((value, index) => index !== indexAux)
        setDays(filteredDays)
      }
    }
    
  }

  return (
    <>
      <StyledDay selectedDay={selectedDay} savedHabit={savedHabit} onClick={handleDays}>{day}</StyledDay>
    </>
  )

}

const HabitCard = styled.div`
  height: 180px;
  background-color: white;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 15px;

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
  opacity: ${props => props.savedHabit ? "0.5" : "initial"};

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
    background-color: ${props => props.savedHabit ? "#86CCFF" : "#52B6FF"};
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`