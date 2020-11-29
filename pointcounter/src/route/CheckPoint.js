import styled from 'styled-components';
import Nav from '../components/Nav';

const StyledLayer = styled.ul`
  list-style:none;
  margin :0 40px;
  padding:10px 40px;
  background:${props=>props.color};
  li{
    text-align:left;
    font-size :13px;
    margin:4px;
  }
`;

const Checkpoint = ({logs}) =>{
  const players = [];
  const playerPoint = [];
  let error = [];
  for(let i in logs){
    let point = 0;
    if(players.indexOf(logs[i].winner1)===-1){
      players.push(logs[i].winner1);
      playerPoint.push({
        name:logs[i].winner1,
        point: logs[i].winner1_point
      })
    }else{
      playerPoint[players.indexOf(logs[i].winner1)].point += logs[i].winner1_point;
    }
    point += logs[i].winner1_point;
    if(players.indexOf(logs[i].winner2)===-1){
      players.push(logs[i].winner2);
      playerPoint.push({
        name:logs[i].winner2,
        point: logs[i].winner2_point
      })
    }else{
      playerPoint[players.indexOf(logs[i].winner2)].point += logs[i].winner2_point;
    }
    point += logs[i].winner2_point;
    if(players.indexOf(logs[i].loser1)===-1){
      players.push(logs[i].loser1);
      playerPoint.push({
        name:logs[i].loser1,
        point: 0 - logs[i].loser1_point
      })
    }else{
      playerPoint[players.indexOf(logs[i].loser1)].point -= logs[i].loser1_point;
    }
    point -= logs[i].loser1_point;
    if(players.indexOf(logs[i].loser2)===-1){
      players.push(logs[i].loser2);
      playerPoint.push({
        name:logs[i].loser2,
        point: 0 - logs[i].loser2_point
      })
    }else{
      playerPoint[players.indexOf(logs[i].loser2)].point -= logs[i].loser2_point;
    }
    point -= logs[i].loser2_point;
    if(point !==0){
      error.push(logs.timeStamp);
    }
  }
  if(error.length !== 0){
    alert(`${error.join()}의 포인트가 맞지 않습니다. 확인해주세요.`)
  }
  const heaven = playerPoint.filter((player)=>player.point>10).sort((a,b)=>b.point-a.point);
  const kingdom = playerPoint.filter((player)=>11>player.point&&player.point>7).sort((a,b)=>b.point-a.point);
  const noble = playerPoint.filter((player)=>8>player.point&&player.point>3).sort((a,b)=>b.point-a.point);
  const normal = playerPoint.filter((player)=>4>player.point&&player.point>-1).sort((a,b)=>b.point-a.point);
  const slave = playerPoint.filter((player)=>0>player.point&&player.point>-11).sort((a,b)=>b.point-a.point);
  const deepSea = playerPoint.filter((player)=>-10>player.point&&player.point).sort((a,b)=>b.point-a.point);
  return(
  <>
  <Nav state="checkPoint"/>
  <div className="test" style={{margin:"10px auto 30px", maxHeight:"450px",overflow:"scroll"}}>
    <StyledLayer color="rgba(242,184,7,0.3)">
      <li> - 천계 ( 11 ~ )</li>
      {heaven.map((player,idx)=><li key={idx}>{player.name} {player.point} point</li>)}
    </StyledLayer>
    <StyledLayer color="rgba(9,115,104,0.3)">
      <li> - 왕족 ( 8 ~ 10 )</li>
      {kingdom.map((player,idx)=><li key={idx}>{player.name} {player.point} point</li>)}
    </StyledLayer>
    <StyledLayer color="rgba(242,207,184,0.3)">
      <li> - 귀족 ( 4 ~ 7 )</li>
      {noble.map((player,idx)=><li key={idx}>{player.name} {player.point} point</li>)}
    </StyledLayer>
    <StyledLayer color="rgba(217,79,48,0.3)">
      <li> - 평민 ( 0 ~ 3 )</li>
      {normal.map((player,idx)=><li key={idx}>{player.name} {player.point} point</li>)}
    </StyledLayer>
    <StyledLayer color="rgba(242,153,169,0.3)">
      <li> - 노예 ( -1 ~ -10 )</li>
      {slave.map((player,idx)=><li key={idx}>{player.name} {player.point} point</li>)}
    </StyledLayer>
    <StyledLayer color="rgba(5,20,125,0.3)">
      <li> - 심해 ( -11 ~ )</li>
      {deepSea.map((player,idx)=><li key={idx}>{player.name} {player.point} point</li>)}
    </StyledLayer>
  </div>
  </>);
}

export default Checkpoint;