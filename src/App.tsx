import styled from "styled-components";
import LowerMenu from "./components/page/home/LowerMenu";
import TopInformation from "./components/page/home/TopInformation";

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
