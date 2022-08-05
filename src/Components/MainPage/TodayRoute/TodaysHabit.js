import { useState } from "react"
import styled from "styled-components"



export default function TodaysHabit({name, id, done, currentSequence, highestSequence}){
    return(
      <HabitCard>
        <div>
          <HabitName>{name}</HabitName>
          <Sequences>
            <h4>Sequência atual: {currentSequence} dias</h4>
            <h4>Seu recorde: {highestSequence} dias</h4>
          </Sequences>
        </div>
        <ion-icon name="checkbox"></ion-icon>
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
    color: #ebebeb;
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
    color: #666666;
  }
`
const HabitName = styled.div`
  font-size: 20px;
  color: #666666;
`

