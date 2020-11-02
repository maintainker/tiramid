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
  @media (max-width: 768px) {
    width:calc((80% - 20px)/2);
    select{
      width:80px;
    }
  }
  @media (max-width: 368px) {
    select{
      width:50px;
      font-size:10px;
    }
  }
`;
const StyeldBtnAdd = styled.button`
  margin-right:${props=> props.state === "add"? "20px":"0"};
  width:200px; 
  height:50px;
  @media (max-width: 768px) {
    width:calc((80% - 20px)/2);
  }
`;
const StyeldResultBtn = styled.button`
  width: 420px;
  height: 50px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width:80%;
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
  @media (max-width: 768px) {
    width:${props=>props.name==="player"?"33%":"20%"};
  }
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
  @media (max-width: 768px) {
    width:calc((80% - 20px)/2);
  }
`
const Putwin = ({players,addPlayer}) =>{
  const year = (new Date()).getFullYear();
  const month = (new Date()).getMonth();
  const [newPlayer,setNewPlayer] = useState("");
  const [results,setResults] = useState([{
    winner:"0",
    winPoint :"1",
    loser:"0",
    losePoint:"1"
  },{
    winner:"0",
    winPoint :"1",
    loser:"0",
    losePoint:"1"
  }])
  const onClick = ()=>{
    if(window.confirm(`이름이 ${newPlayer}이(가) 맞습니까? 한번 추가하면 제거할수 없습니다.`)){
      addPlayer({
        name:newPlayer,
        win:0,
        lose:0,
        point:0
      }).then((res)=>{
        if(res){
          alert("추가되었습니다.")
        }
      })
      setNewPlayer("")
    }
  }
  
  const onSubmit =async (results)=>{
    let tmpResult = []
    let tmpId = []
    for(let idx in results){
      const resultWinnerIdx= tmpId.indexOf(players[results[idx].winner].id);
      if(resultWinnerIdx===-1){
        tmpId.push(players[results[idx].winner].id);
        tmpResult.push({
          win:players[results[idx].winner].win + 1,
          point:players[results[idx].winner].point + Number(results[idx].winPoint)
        })
      }else{
        tmpResult[resultWinnerIdx].point += Number(results[idx].winPoint);
        if(tmpResult[resultWinnerIdx].win === undefined){
          tmpResult[resultWinnerIdx].win = players[results[idx].winner].win + 1 ; 
        }else{
          tmpResult[resultWinnerIdx].win += 1 ; 
        } 
      }
      const resultLoserIdx= tmpId.indexOf(players[results[idx].loser].id);
      if(resultLoserIdx === -1){
        tmpId.push(players[results[idx].loser].id);
        tmpResult.push({
          lose:players[results[idx].loser].lose + 1,
          point:players[results[idx].loser].point - Number(results[idx].losePoint)
        })
      }else{
        tmpResult[resultLoserIdx].point -= Number(results[idx].losePoint);
        if(tmpResult[resultLoserIdx].lose === undefined){
          tmpResult[resultLoserIdx].lose = players[results[idx].loser].lose + 1 ; 
        }else{
          tmpResult[resultLoserIdx].lose += 1 ; 
        } 
      }
    }
    for(let i in tmpId){
      await dbService.doc(`playerList${year}${month}/${tmpId[i]}`).update(tmpResult[i]);
    }
      
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
        <select value={results[idx].winner} onChange={(e)=>{
          const tmpResults = [...results];
          tmpResults[idx].winner=e.target.value;
          setResults(tmpResults);
          }}>
        {players.map((player,idx)=>(<option key={idx} value={idx}>{player.name}</option>))}
        </select>
        <select value={results[idx].winPoint} onChange={(e)=>{
          const newResults = [...results];
          newResults[idx].winPoint=String(Number(e.target.value))
          setResults(newResults);
        }}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </StyledPlayerBox>
      <StyledPlayerBox name="loser" className="loser">
        <select value={results[idx].loser} onChange={(e)=>{
          const tmpResult = [...results];
          tmpResult[idx].loser=e.target.value;
          setResults(tmpResult);
          }}>
        {players.map((player,idx)=>(<option key={idx} value={idx}>{player.name}</option>))}
        </select>
        <select value={results[idx].losePoint} onChange={(e)=>{
          const newResults = [...results];
          newResults[idx].losePoint=String(Number(e.target.value))
          setResults(newResults);
        }}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </StyledPlayerBox>
    </StyledResultBox>))}
    <div style={{marginTop:"20px", textAlign:"center"}}>
      <StyeldBtnAdd state="add" onClick={()=>{
        const newResults = [...results,{
          winner:"",
          winPoint :"0",
          loser:"",
          losePoint:"0"
        }];
        setResults(newResults);
      }}>결과 추가</StyeldBtnAdd>
      <StyeldBtnAdd onClick={()=>{
        const newResults = [...results];
        newResults.pop();
        setResults(newResults);
      }}>결과 제거</StyeldBtnAdd>
    </div>
    <StyeldResultBtn
      onClick={()=>{
        let checkSum = 0;
        for(let i in results){
           checkSum += Number(results[i].winPoint) - Number(results[i].losePoint);
        }
        const answer = prompt("티라미드 승패 입력을 위한 비밀암호")
        if(checkSum===0 && answer === "태진"){
          onSubmit(results).then(
            ()=>{ 
              console.log("데이터 입력 완료.")
              let formData = new FormData();
              for(let i = 0 ; i < results.length;i++){
                formData.append(`winner_${i+1}`,players[results[i].winner].name);
                formData.append(`winpoint_${i+1}`, results[i].winPoint);
                formData.append(`loser_${i+1}`,players[results[i].loser].name);
                formData.append(`losepoint_${i+1}`, results[i].losePoint);
              }
              return fetch("https://script.google.com/macros/s/AKfycbzDJy7_wH8UastXxrytEnUjfT-xFridRB7dcpJSit0BhQaj-uE/exec", {
                  method: 'POST', 
                  body: formData, 
              })
              
            }      
          ).then(res => res.json())
          .then(response => {
              console.log('Success:', JSON.stringify(response))
              console.log("구글 스프레드 시트에 전송완료.")
          }).then(()=>{
            alert("입력완료!")
            const tmpResults = [...results];
            setResults([{
              winner:tmpResults[0].winner,
              winPoint :tmpResults[0].winPoint,
              loser:tmpResults[0].loser,
              losePoint:tmpResults[0].losePoint
            },{
              winner:tmpResults[1].winner,
              winPoint :tmpResults[1].winPoint,
              loser:tmpResults[1].loser,
              losePoint:tmpResults[1].losePoint
            }]);
          })
          .catch(error => console.error('Error:', error));
        }else if(checkSum !== 0){
          alert("합계가 맞지 않습니다!")
        }else{
          alert("암호를 당장 알아오세요!")
        }
    }}>결과 입력하기</StyeldResultBtn>
    <div style={{margin:"20px 0"}}>
      <StyledInput name="player" value={newPlayer} onChange={(e)=>setNewPlayer(e.target.value)}/>
      <button style={{marginLeft:"20px",padding:"3px",height:"24px"}} onClick={onClick}>플레이어 추가</button>
    </div>
  </>)
}

export default Putwin;