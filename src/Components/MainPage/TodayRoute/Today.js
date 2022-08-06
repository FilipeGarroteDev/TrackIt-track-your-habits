import { useContext, useEffect, useState } from "react"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import updateLocale from "dayjs/plugin/updateLocale"
import styled from "styled-components"
import { getTodayHabits } from "../../../services/trackit"
import { Comment, Title } from "../../common"
import TodaysHabit from "./TodaysHabit"
import ProgressContext from "../../../contexts/ProgressContext"


export default function Today(){
  dayjs.extend(updateLocale)
  dayjs.updateLocale('pt-br', {weekdays: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]})
  const date = dayjs().locale("pt-br").format("dddd, DD/MM");
  const {todaysHabits, setTodaysHabits} = useContext(ProgressContext)
  const [reloadHabits, setReloadHabits] = useState(false)

  useEffect(() => {
    const promise = getTodayHabits();
    promise
      .then(res => {
        setTodaysHabits(res.data)
      })
      .catch(res => {
        alert(
          `Ocorreu um erro na requisição. Favor tente novamente.\n- Descrição: ${res.response.data.details ? res.response.data.details[0] : res.response.data.message}`
        )
      })

  }, [reloadHabits, setTodaysHabits])

    return(
      <>
        <TitleContainer checkedHabits={todaysHabits.filter(habit => habit.done)}>
          <Title>{date}</Title>
          {todaysHabits.filter(habit => habit.done === true).length === 0 ? <h3>Nenhum hábito concluído ainda</h3> : <h3>{`${(todaysHabits.filter(habit => habit.done).length/todaysHabits.length)*100}% dos hábitos concluídos`}</h3>}
        </TitleContainer>
        {todaysHabits.length === 0 ? 
          <Comment>Você não tem hábitos cadastrados para o dia de hoje. Descanse ou selecione o menu "Hábitos" e crie um novo hábito!</Comment>
        :
          todaysHabits.map(({name, id, done, currentSequence, highestSequence}) => done ?
            <TodaysHabit key={id} name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence} id={id} reloadHabits={reloadHabits} setReloadHabits={setReloadHabits} color="#8FC549"/>
          :
            <TodaysHabit key={id} name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence} id={id} reloadHabits={reloadHabits} setReloadHabits={setReloadHabits}/>
          )}
      </>
    )
}

  const TitleContainer = styled.div`
    margin-bottom: 20px;

    h3{
      font-size: 18px;
      color: ${props => props.checkedHabits.length === 0 ? "#bababa" : "#8FC549"};
      margin-top: 4px;
    }
  
  `