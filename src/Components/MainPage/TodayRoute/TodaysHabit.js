
import { useContext } from "react"
import styled from "styled-components"
import { postCompletedHabit, postUncompletedHabit } from "../../../services/trackit"
import ProgressContext from "../../../contexts/ProgressContext"


export default function TodaysHabit({name, id, done, currentSequence, highestSequence, color}){
  const {todaysHabits, reloadHabits, setReloadHabits} = useContext(ProgressContext)

  function checkHabit(){
    if(done){
      const promise = postUncompletedHabit(todaysHabits, id);
      promise.then(res => {
        setReloadHabits(!reloadHabits)
      })
        .catch(res => console.log("erro"))
    } else {
      const promise = postCompletedHabit(todaysHabits, id);
      promise.then(res => {
        setReloadHabits(!reloadHabits)
      })
        .catch(res => console.log("erro"))
    }
  }

  return(
    <HabitCard color={color}>
      <div>
        <HabitName>{name}</HabitName>
        <Sequences color={color} currentSequence={currentSequence} highestSequence={highestSequence}>
          <h4>Sequência atual: <en>{currentSequence} dias</en></h4>
          <h4>Seu recorde: <en>{highestSequence} dias</en></h4>
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
    color: ${props => props.color ? props.color : "#ebebeb"};
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


  h4:nth-of-type(1){
    font-size: 13px;
    color: #666666;

    en{
    color: ${props => props.color ? "#8FC549" : "#666666"};
    }

  }

  h4:nth-of-type(2){
    font-size: 13px;
    color: #666666;

    en{
    color: ${props => (props.currentSequence === props.highestSequence) && props.highestSequence !== 0 ? "#8FC549" : "#666666"};
    }
    
  }

`
const HabitName = styled.div`
  font-size: 20px;
  color: #666666;
`