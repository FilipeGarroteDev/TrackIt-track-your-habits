import { useState, useContext } from "react"
import styled from "styled-components"
import { postCompletedHabit, postUncompletedHabit } from "../../../services/trackit"
import ProgressContext from "../../../contexts/ProgressContext"




export default function TodaysHabit({name, id, done, currentSequence, highestSequence}){
  const {todaysHabits, setTodaysHabits, checkedHabits, setCheckedHabits} = useContext(ProgressContext)

  function checkHabit(){
    if(done){
      const promise = postUncompletedHabit(todaysHabits, id);
      console.log(id, done, todaysHabits, checkedHabits)

      promise.then(res => {
        console.log(id, done, todaysHabits, checkedHabits)
        const aux = checkedHabits.filter(habit => habit === id)
        const indexAux = checkedHabits.findIndex(habit => habit === aux[0])
        const filteredHabits = checkedHabits.filter ((habit, index) => index !== indexAux)
        setCheckedHabits(filteredHabits);
        setTodaysHabits(todaysHabits)
      })
        .catch(res => console.log(id, done, todaysHabits, checkedHabits))
    } else {
      const promise = postCompletedHabit(todaysHabits, id);
      promise.then(res => {
        console.log(id, done, todaysHabits, checkedHabits)
        console.log(res.data);
        setCheckedHabits([
          ...checkedHabits,
          id
        ])
        setTodaysHabits(todaysHabits)
      })
        .catch(res => console.log(id, done, todaysHabits, checkedHabits))
    }
  }

  return(
    <HabitCard done={done}>
      <div>
        <HabitName>{name}</HabitName>
        <Sequences>
          <h4>Sequência atual: {currentSequence} dias</h4>
          <h4>Seu recorde: {highestSequence} dias</h4>
        </Sequences>
      </div>
      <ion-icon name="checkbox" onClick={checkHabit}></ion-icon>
    </HabitCard>
  )
}


const HabitCard = styled.div`
  width: 100%;
  height: 94px;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  position: relative;

  div{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ion-icon{
    width: 87px;
    height: 87px;
    color: ${props => props.done ? "#8FC549" : "#ebebeb"};
    position: absolute;
    top: 5px;
    right: 5px;
  }
`

const Sequences = styled.div`
  &&{
    display: flex;
    flex-direction: column;
    gap: 3px;
  }


  h4{
    font-size: 13px;
    color: ${props => props.done ? "#8FC549" : "#666666"};
  }
`
const HabitName = styled.div`
  font-size: 20px;
  color: #666666;
`

