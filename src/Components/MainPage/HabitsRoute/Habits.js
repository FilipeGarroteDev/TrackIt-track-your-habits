import { useEffect, useState } from "react"
import styled from "styled-components"
import { getHabits } from "../../../services/trackit"
import CreatedHabit from "./CreatedHabit"
import PendingHabit from "./PendingHabit"


export default function Habits(){
  const [habits, setHabits] = useState([])
  const [createHabit, setCreateHabit] = useState(false)
  const [refreshList, setRefreshList] = useState(false)

  useEffect(() => {
    const promise = getHabits();

    promise.then(res => {
      setHabits(res.data)
    })
  }, [refreshList])

  return(
    <>
      <TitleContainer>
        <Title>Meus hábitos</Title>
        <div onClick={() => setCreateHabit(true)}>+</div>
      </TitleContainer>
      {createHabit ? <PendingHabit habits={habits} setHabits={setHabits} setCreateHabit={setCreateHabit} refreshList={refreshList} setRefreshList={setRefreshList}/> : ""}
      {habits.length === 0 ? 
        <Comment>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Comment>
      :
        habits.map((({name, days}) => <CreatedHabit name={name} days={days}/>))  }
    </>
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

