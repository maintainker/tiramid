import styled from 'styled-components';
import Nav from '../components/Nav';

const StyledLayer = styled.ul`
  list-style:none;
  margin :10px auto;
  padding:0 40px;
  li{
    text-align:left;
    font-size :13px;
    margin:4px;
  }
`;

const Checkpoint = ({players}) =>{
  const heaven = players.filter((player)=>player.point>10).sort((a,b)=>b.point-a.point);
  const kingdom = players.filter((player)=>11>player.point&&player.point>7).sort((a,b)=>b.point-a.point);
  const noble = players.filter((player)=>8>player.point&&player.point>3).sort((a,b)=>b.point-a.point);
  const normal = players.filter((player)=>4>player.point&&player.point>-1).sort((a,b)=>b.point-a.point);
  const slave = players.filter((player)=>0>player.point&&player.point>-11).sort((a,b)=>b.point-a.point);
  const deepSea = players.filter((player)=>-10>player.point&&player.point).sort((a,b)=>b.point-a.point);
  return(
  <>
  <Nav state="checkPoint"/>
  <StyledLayer>
    <li> - 천계 ( 11 ~ )</li>
    {heaven.map((player)=><li key={player.name}>{player.name} {player.point} point</li>)}
  </StyledLayer>
  <StyledLayer>
    <li> - 왕족 ( 8 ~ 10 )</li>
    {kingdom.map((player)=><li key={player.name}>{player.name} {player.point} point</li>)}
  </StyledLayer>
  <StyledLayer>
    <li> - 귀족 ( 4 ~ 7 )</li>
    {noble.map((player)=><li key={player.name}>{player.name} {player.point} point</li>)}
  </StyledLayer>
  <StyledLayer>
    <li> - 평민 ( 0 ~ 3 )</li>
    {normal.map((player)=><li key={player.name}>{player.name} {player.point} point</li>)}
  </StyledLayer>
  <StyledLayer>
    <li> - 노예 ( -1 ~ -10 )</li>
    {slave.map((player)=><li key={player.name}>{player.name} {player.point} point</li>)}
  </StyledLayer>
  <StyledLayer>
    <li> - 심해 ( -11 ~ )</li>
    {deepSea.map((player)=><li key={player.name}>{player.name} {player.point} point</li>)}
  </StyledLayer>
  </>);
}

export default Checkpoint;