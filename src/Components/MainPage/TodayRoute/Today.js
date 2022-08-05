import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import updateLocale from "dayjs/plugin/updateLocale"


export default function Today(){
  dayjs.extend(updateLocale)
  dayjs.updateLocale('pt-br', {weekdays: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado-feira"]})
  const weekday = dayjs().locale("pt-br").format("dddd, DD/MM");


  return(
    <>
      <h1>MINHA LINDA PÁGINA!!!!!</h1>
      <button>Clica aí!</button>
    </>
    
  )
}