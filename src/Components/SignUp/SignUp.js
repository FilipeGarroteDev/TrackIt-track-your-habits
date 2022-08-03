import { Link } from "react-router-dom";
import logo from "../../assets/images/big-logo.svg"
import Container from "../common/Container";
import { Form, SignUpNavigation } from "../common/Form";

export default function SignUp(){
  return (
    <Container>
      <img src={logo} alt="logo"/>
      <Form>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="senha"/>
        <input type="text" placeholder="nome"/>
        <input type="url" placeholder="foto"/>
        <button>Entrar</button>
      </Form>
      <SignUpNavigation>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </SignUpNavigation>
    </Container>
  )
}