import styled from "styled-components";

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;


  input {
    height: 45px;
    padding: 10px;
    border: 1px solid #D4D4D4;
    font-size: 20px;
    outline-color: #126ba5;

    &::placeholder{
      color: #dbdbdb;
    }
  }

  button{
    height: 45px;
    color: #ffffff;
    background-color: ${props => props.loggedIn || props.wasSent ? "#86CCFF" : "#52b6ff"};
    font-size: 20px;
    border: none;
    border-radius: 4.5px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }`;

const SignUpNavigation = styled.span`
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;

  a:visited{
    color: #52b6ff;
  }`;


export {Form, SignUpNavigation};