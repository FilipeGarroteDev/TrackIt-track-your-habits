import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/big-logo.svg"
import { postLogin } from "../../services/trackit";
import Container from "../common/Container";
import { Form, SignUpNavigation } from "../common/Form";

export default function SignIn(){
  const [signInData, setSignInData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function handleForm(e){
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    })
  }

  function sendLogin(e){
    e.preventDefault();
    const navigate = useNavigate();

    if (signInData.email && signInData.password){
      setLoggedIn(true)
      const promise = postLogin()

      promise
        .then()
        .catch()
    }
    
  }

  return (
    <Container>
      <img src={logo} alt="logo"/>
      <Form>
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
        {loggedIn ? <button><Bars heigth={40} width={40} color="white" /></button> : <button>Entrar</button>}
      </Form>
      <SignUpNavigation>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </SignUpNavigation>
    </Container>
  )
}


