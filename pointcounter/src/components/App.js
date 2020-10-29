import styled from "styled-components";
import AppRoute from "./Router";
const StyledContainer = styled.div`
  width: 500px;
  height: 400px;
  position: absolute;
  background:white;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`;
function App() {
  const randomBg = Math.floor(Math.random()*10);
  return (
    <div className={`container img_${randomBg}`}>
      <StyledContainer>
        <AppRoute></AppRoute>
      </StyledContainer>
    </div>
  );
}

export default App;
