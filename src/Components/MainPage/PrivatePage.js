import { useContext } from "react"
import { Navigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../../contexts/UserContext"
import Header from "./Header"
import Menu from "./Menu"

export default function PrivatePage({children}){
  const {userData} = useContext(UserContext)
  console.log(userData)
  
  if(userData.token){
    return(
      <Wrapper>
        <Header />
        {children}
        <Menu />
      </Wrapper>
    )
  } else {
    return(
      <Navigate to="/" replace />
    )
  }
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 90px 20px;
`