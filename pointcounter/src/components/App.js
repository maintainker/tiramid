import styled from "styled-components";
import AppRoute from "./Router";
import { useState, useEffect, useMemo } from "react";
import {dbService} from "../fbase";  
const StyledContainer = styled.div`
  display: ${(props)=>props.display==="true"? "block;":"none;"}
  z-index:100;
  width: 500px;
  position: absolute;
  background:white;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  text-align:center;
  @media (max-width: 768px) {
    width:calc(100% - 20px);
    left:10px;
    transform:translate(0,-50%);
  }
`;
const StyledBtn = styled.button`
  border: 0;
  background: white;
  position:absolute;
  height:20px;
  top:40px;
  left:50%;
  transform:translateX(-50%);
  padding:20px;
  line-height:0;
  @media (max-width: 768px) {
    top:40px;
  }
  
`;
function App() {
  const [players,setPlayers] = useState([]);
  const year = (new Date()).getFullYear();
  const month = (new Date()).getMonth();
  const addPlayer = async (player) =>{
    let check = true;
    for(let i in players){
      if(players[i].name === player.name){
        check = false
      }
    }
    if(check){
      await dbService.collection(`playerList${year}${month}`).add(player);
    }else{
      alert("중복된 이름이 있습니다.")
    }
  }
  useEffect(()=>{
    dbService.collection(`playerList${year}${month}`).onSnapshot((snapshot)=>{
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
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundSize:"cover",
      position: "relative",
      backgroundPosition: "center"}} className={`img${randomBg}`}>
      <StyledContainer display={String(display)}>
        <AppRoute players={players} addPlayer={addPlayer}></AppRoute>
      </StyledContainer>
      <StyledBtn onClick={()=>{setDisplay((prev)=>!prev)}}>{display? "배경 관람":"입력 돌아가기"}</StyledBtn>
    </div>
  );
}

export default App;
