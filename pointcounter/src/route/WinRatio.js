import Nav from "../components/Nav";

const WinRatio =({players}) =>{

  const checkPlayers = players.filter((player)=>{
    let check = true;
    if(player.name==="티라미드" || player.win+player.lose <5){
      check = false;
    }
    return check;
  })
  checkPlayers.sort((a,b)=>{
    const aRatio = a.win/(a.win+a.lose);
    const bRatio = b.win/(b.win+b.lose);
    return bRatio-aRatio
  })
  return(
  <>
    <Nav state="winRatio"/>
    <div style={{margin:"20px 0 30px",position:"relative",maxHeight:"500px",overflow:"scroll"}}>
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