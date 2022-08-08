import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Header(){
  const {setUserData, userData} = useContext(UserContext);
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  return(
    <TopTitle isOpened={isOpened}>
      <MinimizedMenu>
        <h1>TrackIt</h1>
        {isOpened ?
          <ion-icon name="chevron-up-circle-outline" onClick={() => setIsOpened(!isOpened)}></ion-icon>
        :
          <ion-icon name="chevron-down-circle-outline" onClick={() => setIsOpened(!isOpened)}></ion-icon>}
        <img src={userData.image} alt="Profile" onClick={() => setIsOpened(!isOpened)}/>
      </MinimizedMenu>
      <MaximizedMenu>
        {isOpened ? <h2>Olá, {userData.name}! :)</h2> : <></>}
        {isOpened ? <h2 onClick={() => {
          localStorage.clear();
          setUserData([]);
          navigate("/");
        }}>Logout</h2> : <></>}
      </MaximizedMenu>
    </TopTitle>
  )};

const TopTitle = styled.header`
  width: 100%;
  height: ${props => props.isOpened ? '140px' : '70px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.isOpened ? 'flex-start' : 'center'};
  padding: 0 18px;
  background-color: #126BA5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: 3;
  gap: 20px;

  h1{
    font-family: 'Playball', sans-serif;
    font-size: 39px;
    color: #FFFFFF;
  }

  img{
    height: ${props => props.isOpened ? '70px' : '51px'};
    width: ${props => props.isOpened ? '70px' : '51px'};
    object-fit: cover;
    border-radius: 50px;
  }

  ion-icon{
    color: white;
    font-size: 24px;
    position: absolute;
    bottom: 0;
    right: 47%;
  }

  h2{
    color: white;
    font-size: 20px;
    font-weight: 500;
  }

  h2:nth-of-type(2){
    text-decoration: underline;
  }`;

const MinimizedMenu = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding-top: 18px;
  justify-content: space-between;
  align-items: center;`;

const MaximizedMenu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;`;