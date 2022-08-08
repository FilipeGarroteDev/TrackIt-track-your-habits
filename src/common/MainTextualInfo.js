import styled from "styled-components";


const Title = styled.h2`
  font-size: 23px;
  color: #126BA5;
`

const Comment = styled.span`
  font-size: 18px;
  color: ${props => props.theme.fontColor.text};
  display: block;
  margin-top: 30px;
`

export {Title, Comment};