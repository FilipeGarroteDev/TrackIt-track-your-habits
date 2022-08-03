import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Reset, GlobalStyle} from "../../globalStyle";
import SignIn from "../SignIn/SignIn.js";

export default function App(){
  return (
    <>
      <Reset />
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          {/* <Route path="/cadastro" element={<SignUp/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
