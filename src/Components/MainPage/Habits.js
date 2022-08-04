import { postHabit } from "../../services/trackit"


export default function Habits(){
  return(
    <>
      <h1>MINHA LINDA PÁGINA!!!!!</h1>
      <button onClick={() => postHabit()}>Clica aí!</button>
    </>
    
  )
}