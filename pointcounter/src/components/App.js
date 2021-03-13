import styled from "styled-components";
import AppRoute from "./Router";
import { useState, useEffect, useMemo } from "react";
import { dbService } from "../fbase";
const StyledContainer = styled.div`
  display: ${(props) => (props.display === "true" ? "block;" : "none;")}
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
  position: absolute;
  height: 20px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  line-height: 0;
  @media (max-width: 768px) {
    top: 40px;
  }
`;
function App() {
  const [logs, setLogs] = useState([]);
  // const month = 11;
  useEffect(() => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    dbService.collection(`playerList${year}${month}`).onSnapshot((snapshot) => {
      const logArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      logArr.sort((a, b) => Number(b.timeStamp) - Number(a.timeStamp));
      console.log(logArr);
      setLogs(logArr);
    });
  }, []);
  const randomBg = useMemo(() => Math.floor(Math.random() * 15), []);
  const [display, setDisplay] = useState(true);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: "center",
      }}
      className={`img${randomBg}`}
    >
      <StyledContainer display={String(display)}>
        <AppRoute logs={logs}></AppRoute>
      </StyledContainer>
      <StyledBtn
        onClick={() => {
          setDisplay((prev) => !prev);
        }}
      >
        {display ? "배경 관람" : "입력 돌아가기"}
      </StyledBtn>
    </div>
  );
}

export default App;
