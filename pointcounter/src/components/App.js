import styled from "styled-components";
import AppRoute from "./Router";
import { useState, useEffect, useMemo } from "react";
import {dbService} from "../fbase";
const StyledContainer = styled.div`
  display: ${(props)=>props.display? "block;":"none;"}
  width: 500px;
  position: absolute;
  background:white;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  text-align:center;
`;
const StyledBtn = styled.button`
  border: 0;
  background: white;
  position:absolute;
  height:20px;
  top:150px;
  left:50%;
  transform:translateX(-50%);
  padding:20px;
  line-height:0;
`;
const StyledNav = styled.ul`
  list-style:none;
  text-align:center;
  padding :10px 0;
  li{
    display:inline-block;
    width:calc((100% - 60px)/3);
    height:40px;
    line-height:40px;
    margin-left:15px;
    box-sizing:border-box;
    cursor: pointer;
  }
  li:hover{
    border-bottom: 3px solid green;
  }
  li:first-child{
    margin:0;
  }
  li.on{
    border-bottom: 3px solid green;
  }
`;
function App() {
  const [players,setPlayers] = useState([]);
  const addPlayer = async (player) =>{
    await dbService.collection("playerList").add(player);
  }
  useEffect(()=>{
    dbService.collection(`playerList`).onSnapshot((snapshot)=>{
      const playerArr = snapshot.docs.map(doc=>{
        return({id:doc.id,...doc.data()})})
      if(playerArr.length === 0 ){
        addPlayer({
          name:"티라미드",
          win:0,
          lose:0,
          point:0
        });
      }
      setPlayers(playerArr);
    })
  },[])
  const randomBg = useMemo(()=> Math.floor(Math.random()*10),[]);
  const [display,setDisplay] =useState(true);
  return (
    <div className={`container img_${randomBg}`}>
      <StyledContainer display={display}>
        <StyledNav>
          <li>승률 확인</li>
          <li>포인트 확인</li>
          <li>승패 입력</li>
        </StyledNav>
        <AppRoute players={players} addPlayer={addPlayer}></AppRoute>
      </StyledContainer>
      <StyledBtn onClick={()=>{setDisplay((prev)=>!prev)}}>{display? "배경 관람":"입력 돌아가기"}</StyledBtn>
    </div>
  );
}

export default App;
