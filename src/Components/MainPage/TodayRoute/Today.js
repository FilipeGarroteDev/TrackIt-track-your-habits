import { useEffect, useState } from "react"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import updateLocale from "dayjs/plugin/updateLocale"
import styled from "styled-components"
import { getTodayHabits } from "../../../services/trackit"
import { Comment, Title } from "../../common"
import TodaysHabit from "./TodaysHabit"


export default function Today(){
  dayjs.extend(updateLocale)
  dayjs.updateLocale('pt-br', {weekdays: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado-feira"]})
  const date = dayjs().locale("pt-br").format("dddd, DD/MM");
  const [todaysHabits, setTodaysHabits] = useState([])

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

  }, [])

    return(
      <>
        <TitleContainer>
          <Title>{date}</Title>
          <h3>Nenhum hábito concluído ainda</h3>
        </TitleContainer>
        {todaysHabits.length === 0 ? 
          <Comment>Você não tem hábitos cadastrados para o dia de hoje. Descanse ou selecione o menu "Hábitos" e crie um novo hábito!</Comment>
        :
          todaysHabits.map(({name, id, done, currentSequence, highestSequence}) => 
            <TodaysHabit key={id} name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence}/>
          )}
      </>
    )
}

  const TitleContainer = styled.div`
    margin-bottom: 20px;

    h3{
      font-size: 18px;
      color: #bababa;
      margin-top: 4px;
    }
  
  `