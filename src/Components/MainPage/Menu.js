import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Menu(){

  return(
    <BottomMenu>
      <span>Hábitos</span>
      
      <span>Histórico</span>
    </BottomMenu>
  )
}

const BottomMenu = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 33px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;

  span{
    font-size: 18px;
    color: #52b6ff;
  }


`