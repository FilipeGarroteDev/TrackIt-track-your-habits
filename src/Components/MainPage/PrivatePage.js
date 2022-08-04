import { useContext } from "react"
import { Navigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"
import Header from "./Header"

export default function PrivatePage({children}){
  const {userData} = useContext(UserContext)
  console.log(userData)
  
  if(userData.token){
    return(
      <>
        <Header>
          {children}
        </Header>
      </>
    )
  } else {
    return(
      <Navigate to="/" replace />
    )
  }
}