import { Link } from "react-router-dom";
import logo from "../../assets/images/big-logo.svg"
import Container from "../common/Container";
import { Form, SignUpNavigation } from "../common/Form";

export default function SignIn(){
  return (
    <Container>
      <img src={logo} alt="logo"/>
      <Form>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="senha"/>
        <button>Entrar</button>
      </Form>
      <SignUpNavigation>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </SignUpNavigation>
    </Container>
  )
}


