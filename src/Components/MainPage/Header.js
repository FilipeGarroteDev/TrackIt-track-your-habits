import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Header(){
  const {userData} = useContext(UserContext)

  return(
    <TopTitle>
      <h1>TrackIt</h1>
      <img src={userData.image} alt="Profile"/>
    </TopTitle>
  )
}

const TopTitle = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  background-color: #126BA5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  h1{
    font-family: 'Playball', sans-serif;
    font-size: 39px;
    color: #FFFFFF;
  }

  img{
    height: 51px;
    width: 51px;
    object-fit: cover;
    border-radius: 50px;
  }

`