import { useState, useEffect } from "react";
import { dbService } from "../fbase";
import styled from "styled-components";
import Nav from "../components/Nav";
const StyledResultBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const StyledPlayerBox = styled.div`
  display: inline-block;
  margin-right: ${(props) => (props.name === "winner" ? "20px;" : "0;")} select {
    margin-right: 15px;
    height: 23px;
  }
  @media (max-width: 768px) {
    width: calc((80% - 20px) / 2);
    select {
      width: 80px;
    }
  }
  @media (max-width: 368px) {
    select {
      width: 50px;
      font-size: 10px;
    }
  }
`;
const StyeldResultBtn = styled.button`
  width: 380px;
  height: 50px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const StyledInput = styled.input`
  width: ${(props) => (props.name === "player" ? "200px" : "100px")};
  height: 24px;
  text-align: right;
  box-sizing: border-box;
  padding: 2px;
  border: 0;
  border-bottom: 1px solid #aaa;
  @media (max-width: 768px) {
    width: ${(props) => (props.name === "player" ? "33%" : "20%")};
  }
`;
const StyledNavUl = styled.ul`
  text-align: center;
  list-style: none;
  font-size: 28px;
  margin-top: 20px;
`;
const StyledNavLi = styled.li`
  margin-right: ${(props) => (props.name === "winner" ? "20px" : "0")};
  display: inline-block;
  width: 200px;
  @media (max-width: 768px) {
    width: calc((80% - 20px) / 2);
  }
`;

const ANSWER = new Date().valueOf() > 1704585600000 ? "티라" : "태진";
const Putwin = ({ logs: totalLog, date, setYear, setMonth }) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const [playerList, setPlayerList] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [results, setResults] = useState([
    {
      winner: "0",
      winPoint: "1",
      loser: "0",
      losePoint: "1",
    },
    {
      winner: "0",
      winPoint: "1",
      loser: "0",
      losePoint: "1",
    },
  ]);
  console.log(date, year, month);
  useEffect(() => {
    if (date.month !== month || date.year !== year) {
      setMonth(month);
      setYear(year);
    }
  }, [setMonth, setYear, year, month, date]);
  useEffect(() => {
    const logs = totalLog.filter(
      (el) => el.year === date.year && el.month === date.month
    );
    const players = [];
    for (let i in logs) {
      if (players.indexOf(logs[i].winner1) === -1) {
        players.push(logs[i].winner1);
      }
      if (players.indexOf(logs[i].winner2) === -1) {
        players.push(logs[i].winner2);
      }
      if (players.indexOf(logs[i].loser1) === -1) {
        players.push(logs[i].loser1);
      }
      if (players.indexOf(logs[i].loser2) === -1) {
        players.push(logs[i].loser2);
      }
    }
    players.sort();
    if (players.indexOf("티라미드") === -1) players.push("티라미드");
    setPlayerList(players);
  }, [totalLog, date]);
  const onClick = () => {
    if (
      window.confirm(
        `이름이 ${newPlayer}이(가) 맞습니까? 한번 추가하면 제거할수 없습니다.`
      ) &&
      playerList.indexOf(newPlayer) === -1
    ) {
      setPlayerList(() => {
        let players = [...playerList, newPlayer];
        players.sort();
        return players;
      });
    } else if (playerList.indexOf(newPlayer) !== -1) {
      alert("중복된 이름이 있습니다.");
    }
  };

  const onSubmit = async (results) => {
    const logTime = new Date();
    const logDate =
      String(logTime.getDate()).length === 1
        ? "0" + String(logTime.getDate())
        : String(logTime.getDate());
    const logHour =
      String(logTime.getHours()).length === 1
        ? "0" + String(logTime.getHours())
        : String(logTime.getHours());
    const logMinute =
      String(logTime.getMinutes()).length === 1
        ? "0" + String(logTime.getMinutes())
        : String(logTime.getMinutes());
    const thisGame = {
      timeStamp: logDate + logHour + logMinute,
      winner1: playerList[results[0].winner],
      winner1_point: Number(results[0].winPoint),
      winner2: playerList[results[1].winner],
      winner2_point: Number(results[1].winPoint),
      loser1: playerList[results[0].loser],
      loser1_point: Number(results[0].losePoint),
      loser2: playerList[results[1].loser],
      loser2_point: Number(results[1].losePoint),
      month: date.month,
      year: date.year,
    };
    // console.log(thisGame);
    await dbService.collection(`playLog`).add(thisGame);
  };
  return (
    <>
      <Nav state="putWin" />
      <StyledNavUl>
        <StyledNavLi name="winner">승리</StyledNavLi>
        <StyledNavLi name="loser">패배</StyledNavLi>
      </StyledNavUl>
      {results.map((result, idx) => (
        <StyledResultBox key={idx}>
          <StyledPlayerBox name="winner" className="winner">
            <select
              value={results[idx].winner}
              onChange={(e) => {
                const tmpResults = [...results];
                tmpResults[idx].winner = e.target.value;
                setResults(tmpResults);
              }}
            >
              {playerList.map((player, idx) => (
                <option key={idx} value={idx}>
                  {player}
                </option>
              ))}
            </select>
            <select
              value={results[idx].winPoint}
              onChange={(e) => {
                const newResults = [...results];
                newResults[idx].winPoint = String(Number(e.target.value));
                setResults(newResults);
              }}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </StyledPlayerBox>
          <StyledPlayerBox name="loser" className="loser">
            <select
              value={results[idx].loser}
              onChange={(e) => {
                const tmpResult = [...results];
                tmpResult[idx].loser = e.target.value;
                setResults(tmpResult);
              }}
            >
              {playerList.map((player, idx) => (
                <option key={idx} value={idx}>
                  {player}
                </option>
              ))}
            </select>
            <select
              value={results[idx].losePoint}
              onChange={(e) => {
                const newResults = [...results];
                newResults[idx].losePoint = String(Number(e.target.value));
                setResults(newResults);
              }}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </StyledPlayerBox>
        </StyledResultBox>
      ))}
      <StyeldResultBtn
        onClick={() => {
          let checkSum = 0;
          for (let i in results) {
            checkSum +=
              Number(results[i].winPoint) - Number(results[i].losePoint);
          }
          const lastCheck = window.confirm(
            `승 : ${playerList[results[0].winner]}(${results[0].winPoint}), ${
              playerList[results[1].winner]
            }(${results[1].winPoint}) 패: ${playerList[results[0].loser]}(${
              results[0].losePoint
            }), ${playerList[results[1].loser]}(${
              results[1].losePoint
            }) 이(가) 맞나요?`
          );
          const answer = lastCheck
            ? prompt("티라미드 승패 입력을 위한 비밀암호")
            : null;
          if (checkSum === 0 && answer === ANSWER) {
            onSubmit(results)
              .then(() => {
                alert("입력완료!");
                const tmpResults = [...results];
                setResults([
                  {
                    winner: tmpResults[0].winner,
                    winPoint: tmpResults[0].winPoint,
                    loser: tmpResults[0].loser,
                    losePoint: tmpResults[0].losePoint,
                  },
                  {
                    winner: tmpResults[1].winner,
                    winPoint: tmpResults[1].winPoint,
                    loser: tmpResults[1].loser,
                    losePoint: tmpResults[1].losePoint,
                  },
                ]);
              })
              .catch((error) => console.error("Error:", error));
          } else if (checkSum !== 0) {
            alert("합계가 맞지 않습니다!");
          } else if (lastCheck && answer !== ANSWER) {
            alert("암호를 당장 알아오세요!");
          }
        }}
      >
        결과 입력하기
      </StyeldResultBtn>
      <div style={{ margin: "20px 0" }}>
        <StyledInput
          name="player"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
        />
        <button
          style={{ marginLeft: "20px", padding: "3px", height: "24px" }}
          onClick={onClick}
        >
          플레이어 추가
        </button>
      </div>
    </>
  );
};

export default Putwin;
