import styled from "styled-components";
import AppRoute from "./Router";
import { useState, useEffect, useMemo } from "react";
import {dbService} from "../fbase";
import pic1 from "../img/누렁누렁.jpeg";
import pic2 from "../img/누렁이.jpeg";
import pic3 from "../img/두종네집.jpeg";
import pic4 from "../img/두리인재.jpeg";
import pic5 from "../img/방탕.jpeg";
import pic6 from "../img/원샷.jpeg";
import pic7 from "../img/회식1.jpeg";
import pic8 from "../img/회식2.jpeg";
import pic9 from "../img/회식3.jpeg";
import pic0 from "../img/회식4.jpeg";
const StyledBackGround = styled.div`

  width: 100%;
  height: 100vh;
  background: url(${props=>{
    if(props.pic === "0"){
      return pic0;
    }else if(props.pic === "1"){
      return pic1;
    }else if(props.pic === "2"){
      return pic2;
    }else if(props.pic === "3"){
      return pic3;
    }else if(props.pic === "4"){
      return pic4;
    }else if(props.pic === "5"){
      return pic5;
    }else if(props.pic === "6"){
      return pic6;
    }else if(props.pic === "7"){
      return pic7;
    }else if(props.pic === "8"){
      return pic8;
    }else if(props.pic === "9"){
      return pic9;
    }
  }});
  background-size:contain;
  position: relative;
`;
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
    <StyledBackGround pic={String(randomBg)}>
      <StyledContainer display={display}>
        <AppRoute players={players} addPlayer={addPlayer}></AppRoute>
      </StyledContainer>
      <StyledBtn onClick={()=>{setDisplay((prev)=>!prev)}}>{display? "배경 관람":"입력 돌아가기"}</StyledBtn>
    </StyledBackGround>
  );
}

export default App;
