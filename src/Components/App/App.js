import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Reset, GlobalStyle} from "../../globalStyle";
import Habits from "../MainPage/Habits";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default function App(){
  return (
    <>
      <Reset />
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/cadastro" element={<SignUp/>}/>
          <Route path="/habitos" element={<Habits/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
