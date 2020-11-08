import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledNav = styled.ul`
list-style:none;
text-align:center;
padding :10px 0;
li{
  display:inline-block;
  width:calc((100% - 80px)/4);
  height:40px;
  margin-left:15px;
  a{
    display:block;
    width:100%;
    height:100%;
    box-sizing:border-box;
    line-height:40px;
    color:black;
    text-decoration:none;
  }
  a:hover{
    border-bottom: 3px solid green;
  } 
  a.on{
    border-bottom: 3px solid green;
  }
}
li:first-child{
  margin:0;
}
`;

const Nav = ({state})=>{
  return(
    <StyledNav>
      <li><Link id="win-ratio" to="/win-ratio"  className={state==="winRatio"? "winRatio on":"winRatio"} >승률 확인</Link></li>
      <li><Link id="check-point" to="/check-point" className={state==="checkPoint"? "checkPoint on":"checkPoint"}>포인트 확인</Link></li>
      <li><Link id="input-win" to="/input-win" className={state==="putWin"? "putWin on":"putWin"}>승패 입력</Link></li>
      <li><Link id="input-win" to="/view-log" className={state==="viewlog"? "viewlog on":"viewlog"}>로그보기</Link></li>
    </StyledNav>
    )
}

export default Nav;