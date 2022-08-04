import { useContext } from "react"
import { Navigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"

export default function PrivatePage({children}){
  const {userData} = useContext(UserContext)
  console.log(userData)
  
  if(userData.token){
    return(
      <>
        {children}
      </>
    )
  } else {
    return(
      <Navigate to="/" replace />
    )
  }
}