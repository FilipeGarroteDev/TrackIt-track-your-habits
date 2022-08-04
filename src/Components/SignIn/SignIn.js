import { useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/big-logo.svg"
import { postLogin } from "../../services/trackit";
import { Form, SignUpNavigation, Container } from "../common";

export default function SignIn(){
  const [signInData, setSignInData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  localStorage.clear();

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
          localStorage.setItem("hash", JSON.stringify(res.data))
          navigate("/habitos")
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
      <Form onSubmit={sendLogin}>
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


