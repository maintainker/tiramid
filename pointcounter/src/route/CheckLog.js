import Nav from "../components/Nav";
import { dbService } from "../fbase";
import styled from "styled-components";
import { useEffect, useState } from "react";
const StyledLogUl = styled.ul`
  margin: 10px auto;
  list-style: none;
  max-height: 450px;
  overflow: scroll;
  padding: 0;
  li {
    div {
      display: inline-block;
    }
  }
`;
const StyledTimeDiv = styled.div`
  width: 50px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
`;
const StyledPlayerDiv = styled.div`
  width: 50px;
  font-size: 12px;

  @media (max-width: 585px) {
    font-size: 10px;
  }
  svg {
    height: 13px;
    cursor: pointer;
  }
`;
const StyledBtnSec = styled.section`
  width: 300px;
  padding-top: 20px;
  text-align: right;
  margin: 0 auto;
`;
const CheckLog = ({ logs, setYear, setMonth }) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const [optionList, setOptionList] = useState([]);
  const [selectVal, setSelectVal] = useState(`${year}_${month}`);

  useEffect(() => {
    dbService
      .collection("playerList")
      .doc("GtltDG72bHBJmGqDA4Wd")
      .get()
      .then(async (res) => {
        const { dataList } = await res.data();
        const totalArr = dataList.reverse().map((data) => {
          const year = data.substring(0, 4);
          const month = ("0" + data.slice(4)).slice(-2);
          return { year, month };
        });
        setOptionList([...totalArr]);
      });
  }, []);
  return (
    <>
      <Nav state="viewlog" />
      <StyledBtnSec>
        <select
          value={selectVal}
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            const [year, month] = value.split("_");
            setYear(year);
            setMonth(String(Number(month)));
            setSelectVal(`${year}_${month}`);
          }}
        >
          {optionList.map((option, idx) => {
            return (
              <option key={idx} value={`${option.year}_${option.month}`}>{`${
                option.year
              }/${("0" + option.month).slice(-2)}`}</option>
            );
          })}
        </select>
      </StyledBtnSec>
      <StyledLogUl>
        <li>
          <StyledTimeDiv>시간</StyledTimeDiv>
          <StyledPlayerDiv>승리1</StyledPlayerDiv>
          <StyledPlayerDiv>승리2</StyledPlayerDiv>
          <StyledPlayerDiv>패배1</StyledPlayerDiv>
          <StyledPlayerDiv>패배2</StyledPlayerDiv>
          <StyledPlayerDiv>삭제</StyledPlayerDiv>
        </li>
        {logs &&
          logs.map((log, idx) => (
            <li key={idx}>
              <StyledTimeDiv>{log.timeStamp}</StyledTimeDiv>
              <StyledPlayerDiv>
                {log.winner1}({log.winner1_point})
              </StyledPlayerDiv>
              <StyledPlayerDiv>
                {log.winner2}({log.winner2_point})
              </StyledPlayerDiv>
              <StyledPlayerDiv>
                {log.loser1}({log.loser1_point})
              </StyledPlayerDiv>
              <StyledPlayerDiv>
                {log.loser2}({log.loser2_point})
              </StyledPlayerDiv>
              <StyledPlayerDiv
                onClick={async () => {
                  const year = new Date().getFullYear();
                  const month = new Date().getMonth() + 1;
                  const confirm = window.confirm(
                    `시간 ${log.timeStamp}의 삭제가 맞나요?`
                  );
                  const password =
                    (confirm && prompt("티라미드 승패 삭제을 위한 비밀암호")) ||
                    null;
                  if (password === "티츄") {
                    await dbService
                      .collection(`playerList${year}${month}`)
                      .doc(log.id)
                      .delete();
                    alert("삭제 완료!");
                  } else if (confirm) {
                    alert("암호를 당장 알아오세요!");
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>
              </StyledPlayerDiv>
            </li>
          ))}
      </StyledLogUl>
    </>
  );
};

export default CheckLog;
