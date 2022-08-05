import { useEffect, useState } from "react"
import styled from "styled-components"
import { getHabits } from "../../services/trackit"


export default function Habits(){
  const [habits, setHabits] = useState([])
  const [createHabit, setCreateHabit] = useState(false)

  useEffect(() => {
    const promise = getHabits();

    promise.then(res => {
      setHabits(res.data)
      console.log(res.data)
    })
  }, [])

  return(
    <>
      <TitleContainer>
        <Title>Meus hábitos</Title>
        <div onClick={() => setCreateHabit(true)}>+</div>
      </TitleContainer>
      {createHabit ? <PendingHabit setCreateHabit={setCreateHabit}/> : ""}
      {habits.length === 0 ? 
        <Comment>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Comment>
      :
        habits.map((habit => console.log("tem hábito...estranho, né?")))  }
    </>
  )

}

function PendingHabit({setCreateHabit}){
  const week = ["Q", "S", "T", "Q", "Q", "S", "S"]

  return(
    <HabitCard>
      <input type="text" placeholder="nome do hábito"/>
      <WeekContainer>
        {week.map(day => <div>{day}</div>)}
      </WeekContainer>
      <Buttons>
        <span onClick={() => setCreateHabit(false)}>Cancelar</span>
        <button>Salvar</button>
      </Buttons>
    </HabitCard>
  )
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div{
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding-bottom: 3px;
  }
`

const Title = styled.h2`
  font-size: 23px;
  color: #126BA5;
`

const Comment = styled.span`
  font-size: 18px;
  color: #666666;
  display: block;
  margin-top: 30px;
`

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

  div{
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    color: #dbdbdb;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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