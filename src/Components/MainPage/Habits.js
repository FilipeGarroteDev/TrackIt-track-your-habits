import { useEffect, useState } from "react"
import styled from "styled-components"
import { getHabits } from "../../services/trackit"


export default function Habits(){
  const [habits, setHabits] = useState([])

  useEffect(() => {
    const promise = getHabits();

    promise.then(res => {
      setHabits(res.data)
    })
  }, [])

  return(
    <>
      <TitleContainer>
        <Title>Meus hábitos</Title>
        <div>+</div>
      </TitleContainer>
      {habits.length === 0 ? 
        <Comment>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Comment>
      :
        habits.map((habit => console.log("tem hábito...estranho, né?")))  }
    </>
  )

}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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