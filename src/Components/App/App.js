import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import {Reset, GlobalStyle} from "../../globalStyle";
import PrivatePage from "../MainPage/PrivatePage";
import Today from "../MainPage/Today";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default function App(){
  const [userData, setUserData] = useState({})

  return (
    <>
      <UserContext.Provider value={{userData, setUserData}}>
        <Reset />
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/cadastro" element={<SignUp/>}/>
            <Route path="/hoje" element={
              <PrivatePage>
                <Today/>
              </PrivatePage>
            }/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}
