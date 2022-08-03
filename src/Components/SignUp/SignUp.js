import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/big-logo.svg"
import Container from "../common/Container";
import { Form, SignUpNavigation } from "../common/Form";

export default function SignUp(){

  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  })

  function handleForm(e){
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    })
  }

  function sendForm(e){
    e.preventDefault();

    setSignUpData({
      email: "",
      name: "",
      image: "",
      password: "",
    })


  }


  return (
    <Container>
      <img src={logo} alt="logo"/>
      <Form onSubmit={sendForm}>
        <input type="email" placeholder="email" name="email" autoComplete="off" onChange={handleForm} value={signUpData.email}/>
        <input type="password" placeholder="senha" name="password" autoComplete="off" onChange={handleForm}  value={signUpData.password}/>
        <input type="text" placeholder="nome" name="name" onChange={handleForm} value={signUpData.name}/>
        <input type="url" placeholder="foto" name="image" onChange={handleForm} value={signUpData.image}/>
        <button>Entrar</button>
      </Form>
      <SignUpNavigation>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </SignUpNavigation>
    </Container>
  )
}