import styled from "styled-components";
import TopInformation from "./components/page/home/TopInformation";
import LowerMenu from "./components/page/home/LowerMenu";

function App() {
  return (
    <AppWrapper>
      <TopInformation />
      <LowerMenu />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
`;
