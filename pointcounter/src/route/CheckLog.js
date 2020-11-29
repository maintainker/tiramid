import Nav from "../components/Nav";
import styled from "styled-components";
const StyledLogUl = styled.ul`
  margin:30px auto;
  list-style:none;
  max-height:450px;
  overflow:scroll;
  li{
    div{
      display:inline-block;
    }
  }

`;
const StyledTimeDiv = styled.div`
  width:70px;
  height:28px;
  line-height:28px;
`;
const StyledPlayerDiv = styled.div`
  width:60px;
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
    {logs&& logs.map((log)=>(
    <li key={log.timeStamp}>
      <StyledTimeDiv>{log.timeStamp}</StyledTimeDiv>
      <StyledPlayerDiv>{log.winner1}({log.winner1_point})</StyledPlayerDiv>
      <StyledPlayerDiv>{log.winner2}({log.winner2_point})</StyledPlayerDiv>
      <StyledPlayerDiv>{log.loser1}({log.loser1_point})</StyledPlayerDiv>
      <StyledPlayerDiv>{log.loser2}({log.loser2_point})</StyledPlayerDiv>
    </li>))}
  </StyledLogUl>
  </>);
}


export default CheckLog;