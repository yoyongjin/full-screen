import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <button>STT</button>
    </AppContainer>
  );
}

export default App;
