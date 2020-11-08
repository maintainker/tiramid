import Nav from "../components/Nav";
import styled from "styled-components";
const StyledLogUl = styled.ul`
  margin:30px 50px;
  list-style:none;
  max-height:500px;
  overflow:scroll;
  li{
    div{
      display:inline-block;
    }
  }

`;
const StyledTimeDiv = styled.div`
  width:120px;
  height:28px;
  line-height:28px;
`;
const StyledPlayerDiv = styled.div`
  width:70px;
`;
const CheckLog = ({logs}) =>{
  return (  
  <>
  <Nav state="viewlog"/>
  <StyledLogUl>
    <li>
      <StyledTimeDiv>시간</StyledTimeDiv>
      <StyledPlayerDiv>승리1</StyledPlayerDiv>
      <StyledPlayerDiv>승리2</StyledPlayerDiv>
      <StyledPlayerDiv>패배1</StyledPlayerDiv>
      <StyledPlayerDiv>패배2</StyledPlayerDiv>
    </li>
    {logs.gamelog&& logs.gamelog.map((log)=>(
    <li key={log.timeStamp}>
      <StyledTimeDiv>{log.timeStamp}</StyledTimeDiv>
      <StyledPlayerDiv>{log.winner1}</StyledPlayerDiv>
      <StyledPlayerDiv>{log.winner2}</StyledPlayerDiv>
      <StyledPlayerDiv>{log.loser1}</StyledPlayerDiv>
      <StyledPlayerDiv>{log.loser2}</StyledPlayerDiv>
    </li>))}
  </StyledLogUl>
  </>);
}


export default CheckLog;