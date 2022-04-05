import { useState } from "react";
import Modal from "../components/Modal";
import Nav from "../components/Nav";

const WinRatio = ({ logs: totalLog, date }) => {
  const logs = totalLog.filter(
    (el) => el.year === date.year && el.month === date.month
  );
  const [modalOpen, setModalOpen] = useState({ isOpen: false, user: null });
  const checkPlayers = (() => {
    let players = [];
    let tmpRatio = [];
    for (let i in logs) {
      if (
        logs[i].loser1 !== "티라미드" &&
        players.indexOf(logs[i].winner1) === -1
      ) {
        players.push(logs[i].winner1);
        tmpRatio.push({
          name: logs[i].winner1,
          win: 1,
          lose: 0,
        });
      } else if (logs[i].loser1 !== "티라미드") {
        tmpRatio[players.indexOf(logs[i].winner1)].win++;
      }
      if (
        logs[i].loser2 !== "티라미드" &&
        players.indexOf(logs[i].winner2) === -1
      ) {
        players.push(logs[i].winner2);
        tmpRatio.push({
          name: logs[i].winner2,
          win: 1,
          lose: 0,
        });
      } else if (logs[i].loser2 !== "티라미드") {
        tmpRatio[players.indexOf(logs[i].winner2)].win++;
      }
      if (players.indexOf(logs[i].loser1) === -1) {
        players.push(logs[i].loser1);
        tmpRatio.push({
          name: logs[i].loser1,
          win: 0,
          lose: 1,
        });
      } else if (logs[i].winner1 !== "티라미드") {
        tmpRatio[players.indexOf(logs[i].loser1)].lose++;
      }
      if (players.indexOf(logs[i].loser2) === -1) {
        players.push(logs[i].loser2);
        tmpRatio.push({
          name: logs[i].loser2,
          win: 0,
          lose: 1,
        });
      } else if (logs[i].winner2 !== "티라미드") {
        tmpRatio[players.indexOf(logs[i].loser2)].lose++;
      }
    }
    return tmpRatio;
  })();
  console.log(checkPlayers);
  checkPlayers.sort((a, b) => {
    const aRatio = a.win / (a.win + a.lose);
    const bRatio = b.win / (b.win + b.lose);
    return bRatio - aRatio;
  });
  const showUserLank = (user) => {
    setModalOpen({ isOpen: true, user });
  };
  false && showUserLank();
  return (
    <>
      <Nav state="winRatio" />
      <div
        style={{
          margin: "20px 0 30px",
          position: "relative",
          maxHeight: "450px",
          overflow: "scroll",
        }}
      >
        {checkPlayers.map((player, idx) => (
          <div
            key={idx}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 28px",
              boxSizing: "border-box",
            }}
          >
            <span>
              {idx + 1}위 {player.name} 승률 :{" "}
              {Math.round((player.win / (player.win + player.lose)) * 10000) /
                100}{" "}
              % , win : {player.win}, lose : {player.lose}
            </span>
            <button
              style={{
                padding: "5px 8px",
                border: 0,
                background: "rgba(9,115,104,0.3)",
                cursor: "pointer",
              }}
              onClick={() => alert("아직 구현이 되지 않았습니다.")}
              // onClick={() => showUserLank(player)}
            >
              티어 확인
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpene={modalOpen.isOpen}
        closeModal={() => setModalOpen({ isOpen: false })}
      ></Modal>
    </>
  );
};

export default WinRatio;
