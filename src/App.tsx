import styled from "styled-components";
import TopInformation from "./components/page/home/TopInformation";

function App() {
  return (
    <AppWrapper>
      <TopInformation />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
