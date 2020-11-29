import Nav from "../components/Nav";

const WinRatio =({logs}) =>{
  const ratio = (()=>{
    let players = [];
    let tmpRatio = [];
    for(let i in logs){
      if(logs[i].loser1!== "티라미드" && players.indexOf(logs[i].winner1)===-1){
        players.push(logs[i].winner1);
        tmpRatio.push({
          name:logs[i].winner1,
          win:1,
          lose:0
        })
      }else if(logs[i].loser1!== "티라미드"){
        tmpRatio[players.indexOf(logs[i].winner1)].win++;
      }
      if(logs[i].loser2!== "티라미드" && players.indexOf(logs[i].winner2)===-1){
        players.push(logs[i].winner2);
        tmpRatio.push({
          name:logs[i].winner2,
          win:1,
          lose:0
        })
      }else if(logs[i].loser2!== "티라미드"){
        tmpRatio[players.indexOf(logs[i].winner2)].win++;
      }
      if(players.indexOf(logs[i].loser1)===-1){
        players.push(logs[i].loser1);
        tmpRatio.push({
          name:logs[i].loser1,
          win:0,
          lose:1
        })
      }else{
        tmpRatio[players.indexOf(logs[i].loser1)].lose++;
      }
      if(players.indexOf(logs[i].loser2)===-1){
        players.push(logs[i].loser2);
        tmpRatio.push({
          name:logs[i].loser2,
          win:0,
          lose:1
        })
      }else{
        tmpRatio[players.indexOf(logs[i].loser2)].lose++;
      }
    }
    return tmpRatio;
  })();
  const checkPlayers = ratio.filter((player)=>{
    if(player.name==="티라미드" || player.win+player.lose <5){
      return false;
    }else{
      return true;
    }
  })
  checkPlayers.sort((a,b)=>{
    const aRatio = a.win/(a.win+a.lose);
    const bRatio = b.win/(b.win+b.lose);
    return bRatio-aRatio
  })
  return(
  <>
    <Nav state="winRatio"/>
    <div style={{margin:"20px 0 30px",position:"relative",maxHeight:"450px",overflow:"scroll"}}>
    {checkPlayers.map((player,idx)=>
    <div key={idx} style={{padding:"8px"}}>
      <span>{idx+1}위 {player.name} 승률 : {Math.round((player.win/(player.win+player.lose))*10000)/100} % , win : {player.win}, lose : {player.lose}</span>
    </div>)}
    </div>
    <span style={{
    position: "absolute",
    bottom: "3px",
    right: "0",
    fontSize: "5px"}}>* 합계 5판 이상만 집계됩니다. player에 이름이 있지만 여기에 이름이 없다면 경기수가 5판이 되지 않습니다.</span>
  </>);
}

export default WinRatio;