import dayjs from "dayjs"
import { postHabit } from "../../services/trackit"


export default function Today(){
  const date = dayjs()

  return(
    <>
      <h1>MINHA LINDA PÁGINA!!!!!</h1>
      <button onClick={() => postHabit()}>Clica aí!</button>
    </>
    
  )
}