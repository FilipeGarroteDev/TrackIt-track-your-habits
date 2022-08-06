import { useContext, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate, Navigate } from "react-router-dom";
import logo from "../../assets/images/big-logo.svg"
import UserContext from "../../contexts/UserContext";
import { postLogin } from "../../services/trackit";
import { Form, SignUpNavigation, Container } from "../common";



export default function SignIn(){
 
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {setUserData} = useContext(UserContext);

  // if(localStorage.length > 0){
  //   return(<Navigate to="/hoje" replace/>)
   
  // }


  function handleForm(e){
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    })
  }

  function sendLogin(e){
    e.preventDefault();

    if (signInData.email && signInData.password && !loggedIn){
      setLoggedIn(true)
      const promise = postLogin(signInData)

      promise
        .then(res => {
          localStorage.setItem("hash", res.data.token)
          setUserData(res.data)
          navigate("/hoje")
        })
        .catch(res => {
          alert(
          `Ocorreu um erro no cadastro do usuário. Favor tente novamente.\n- Descrição: ${res.response.data.details ? res.response.data.details[0] : res.response.data.message}`
          )
          setLoggedIn(false);
        })
      
      setSignInData({
        email: "",
        password: ""
      })
    }
    
  }

  return (
    <Container>
      <img src={logo} alt="logo"/>
      <Form onSubmit={sendLogin} loggedIn={loggedIn}>
        <input 
          type="email" 
          placeholder="email" 
          autoComplete="username" 
          name="email"
          value={signInData.email}
          onChange={handleForm}
          disabled={loggedIn ? true : false}
        />
        <input 
          type="password" 
          placeholder="senha" 
          autoComplete="current-password" 
          name="password"
          value={signInData.password}
          onChange={handleForm}
          disabled={loggedIn ? true : false}
        />
        {loggedIn ? <button><Bars heigth="40px" width={40} color="white" /></button> : <button>Entrar</button>}
      </Form>
      <SignUpNavigation>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </SignUpNavigation>
    </Container>
  )
}


