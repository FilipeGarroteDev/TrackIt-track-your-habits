import { useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/big-logo.svg"
import { postSignUpData } from "../../services/trackit";
import Container from "../common/Container";
import { Form, SignUpNavigation } from "../common/Form";

export default function SignUp(){

  const navigate = useNavigate()
  const [wasSent, setWasSent] = useState(false)
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
    
    if(signUpData.name && signUpData.email && signUpData.image && signUpData.password){
      setWasSent(true);
      const promise = postSignUpData(signUpData)

      promise
        .then(res => {
          alert("O usuário foi criado com sucesso!!");
          navigate("/")
        })
        .catch(res => {
          alert(
            `Ocorreu um erro no cadastro do usuário. Favor tente novamente.\n- Descrição: ${res.response.data.details ? res.response.data.details[0] : res.response.data.message}`
          );
          setWasSent(false);
        })
      
    }

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
        <input 
          type="email" 
          placeholder="email" 
          name="email" 
          autoComplete="off" 
          disabled={wasSent ? true : false} 
          onChange={handleForm} 
          value={signUpData.email}
        />
        <input 
          type="password" 
          placeholder="senha" 
          name="password" 
          autoComplete="off" 
          disabled={wasSent ? true : false} 
          onChange={handleForm}  
          value={signUpData.password}
        />
        <input 
          type="text" 
          placeholder="nome" 
          name="name" 
          disabled={wasSent ? true : false} 
          onChange={handleForm} 
          value={signUpData.name}
        />
        <input 
          type="url" 
          placeholder="foto" 
          name="image" 
          disabled={wasSent ? true : false} 
          onChange={handleForm} 
          value={signUpData.image}
        />
        {wasSent ? <button><Bars heigth={40} width={40} color="white" /></button> : <button>Entrar</button>}
      </Form>
      <SignUpNavigation>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </SignUpNavigation>
    </Container>
  )
}