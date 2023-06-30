import styled from "styled-components";

function App() {
  return <AppWrapper>Hello</AppWrapper>;
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
