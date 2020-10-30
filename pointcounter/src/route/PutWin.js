import {  useState } from "react";
import {dbService} from "../fbase";
import styled from "styled-components";
import Nav from "../components/Nav";
const StyledResultBox = styled.div`
  text-align:center;
  margin-top:20px;
`;
const StyledPlayerBox = styled.div`
  display:inline-block;
  margin-right:${props=>props.name==="winner"? "20px;":"0;"}
  select{
    margin-right:15px;
    height:23px;
  }
`;
const StyledInput = styled.input`
  width: ${props=>props.name==="player"?"200px":"100px"};
  height:24px;
  text-align:right;
  box-sizing:border-box;
  padding:2px;
  border:0;
  border-bottom:1px solid #aaa;
`;
const StyledNavUl = styled.ul`
  text-align: center;
  list-style: none;
  font-size: 28px;
  margin-top: 20px;
`;
const StyledNavLi = styled.li`
  margin-right: ${props=>props.name==="winner"? "20px":"0"};
  display: inline-block;
  width: 200px;
`
const Putwin = ({players,addPlayer}) =>{
  const [newPlayer,setNewPlayer] = useState("");
  const [results,setResults] = useState([{
    winner:"0",
    winPoint :"0",
    loser:"0",
    losePoint:"0"
  },{
    winner:"0",
    winPoint :"0",
    loser:"0",
    losePoint:"0"
  }])
  const onClick = ()=>{
    if(window.confirm(`이름이 ${newPlayer}이(가) 맞습니까? 한번 추가하면 제거할수 없습니다.`)){
      addPlayer({
        name:newPlayer,
        win:0,
        lose:0,
        point:0
      }).then(
        alert("추가되었습니다.")
      )
      setNewPlayer("")
    }
  }
  
  const onSubmit =async (results)=>{
    for(let result of results){
    await dbService.doc(`playerList/${players[result.winner].id}`).update({
        win: players[result.winner].win + 1,
        point: players[result.winner].point +Number(result.winPoint)
    })
    await dbService.doc(`playerList/${players[result.loser].id}`).update({
      lose: players[result.loser].lose + 1,
      point: players[result.loser].point - Number(result.losePoint)
    })}
  }
  return (
  <>
    <Nav state="putWin"/>
    <StyledNavUl>
      <StyledNavLi name="winner">승리</StyledNavLi>
      <StyledNavLi name="loser">패배</StyledNavLi>
    </StyledNavUl>
    {results.map((result,idx)=>(
    <StyledResultBox key={idx}>
      <StyledPlayerBox name="winner" className="winner">
        <select onChange={(e)=>{
          results[idx].winner=e.target.value;
          }}>
        {players.map((player,idx)=>(<option key={player.name} value={idx}>{player.name}</option>))}
        </select>
        <StyledInput value={result.winPoint} onChange={e=>{
          const newResults = [...results];
          const value = e.target.value;
          let check = true;
          for(let i = 0 ; i < value.length; i++){
            if(value[i]<"0"|| value[i]>"9"){
              check = false;
              alert("숫자만 입력하세요.")
            }
          }
          if(check){
            newResults[idx].winPoint=String(Number(e.target.value))
            setResults(newResults);
          }
          }}/>
      </StyledPlayerBox>
      <StyledPlayerBox name="loser" className="loser">
        <select onChange={(e)=>{
          results[idx].loser=e.target.value;
          }}>
        {players.map((player,idx)=>(<option key={player.name} value={idx}>{player.name}</option>))}
        </select>
        <StyledInput value={results[idx].losePoint} onChange={e=>{
          const newResults = [...results];
          const value = e.target.value;
          let check = true;
          for(let i = 0 ; i < value.length; i++){
            if(value[i]<"0"|| value[i]>"9"){
              check = false;
              alert("숫자만 입력하세요.")
            }
          }
          if(check){
            newResults[idx].losePoint=String(Number(e.target.value))
            setResults(newResults);
          }}}/>
      </StyledPlayerBox>
    </StyledResultBox>))}
    <div style={{marginTop:"20px", textAlign:"center"}}>
      <button style={{marginRight:"20px", width:"200px", height:"50px"}} onClick={()=>{
        const newResults = [...results,{
          winner:"",
          winPoint :"0",
          loser:"",
          losePoint:"0"
        },{
          winner:"0",
          winPoint :"0",
          loser:"0",
          losePoint:"0"
        }];
        setResults(newResults);
      }}>결과 추가</button>
      <button style={{ width:"200px", height:"50px"}}  onClick={()=>{
        const newResults = [...results];
        newResults.pop();
        setResults(newResults);
      }}>결과 제거</button>
    </div>
    <button style={{
      width: "420px",
      height: "50px",
      marginTop: "20px"}} 
      onClick={()=>{
        let checkSum = 0;
        for(let i in results){
           checkSum += Number(results[i].winPoint) - Number(results[i].losePoint);
        }
        if(checkSum===0){
          onSubmit(results).then(()=>{
            alert("입력완료!")
            setResults([{
              winner:"0",
              winPoint :"0",
              loser:"0",
              losePoint:"0"
            }]);
          })
        }else{
          alert("합계가 맞지 않습니다.")
        }
    }}>결과 입력하기</button>
    <div style={{margin:"20px 0"}}>
      <StyledInput name="player" value={newPlayer} onChange={(e)=>setNewPlayer(e.target.value)}/>
      <button style={{marginLeft:"20px",padding:"3px",height:"24px"}} onClick={onClick}>플레이어 추가</button>
    </div>
  </>)
}

export default Putwin;