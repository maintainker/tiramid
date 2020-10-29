import { useEffect, useState } from "react";
import {dbService} from "../fbase";
const Putwin = () =>{
  const [players,setPlayers] = useState([]);
  useEffect(()=>{
    dbService.collection(`playerList`).onSnapshot((snapshot)=>{
      const playerArr = snapshot.docs.map(doc=>({id:doc.id,...doc.data()}))
      console.log(playerArr);
      if(playerArr.length === 0 ){
        
      }
      setPlayers(playerArr);
    })
  },[])
  return (
  <>
    <select id="player">
      {players.map(player=>(<option key={player}>{player}</option>))}
    </select>
  </>)
}

export default Putwin;