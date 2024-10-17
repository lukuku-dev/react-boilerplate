/* eslint-disable react-refresh/only-export-components */
import { useAtom } from "jotai";
import styled from "styled-components";
import {
  checkLove,
  decreaseLove,
  increaseLove,
  resetLove,
} from "../../../atom/love.atom";
import ResultBox from "./ResultBox";

function JotaiHome() {
  const [love] = useAtom(checkLove);
  const [, increment] = useAtom(increaseLove);
  const [, decrement] = useAtom(decreaseLove);
  const [, reset] = useAtom(resetLove);

  // For Emoji
  const Emoji = ({ l }: { l: number }) => {
    let emo = "";
    if (l > 0) {
      emo = "😃";
    } else if (l < 0) {
      emo = "😒";
    } else {
      emo = "🙁";
    }
    return <span>{emo}</span>;
  };

  return (
    <JotaiPage>
      <LoveBox>
        <h2>These Actions are all done with Jotai State.</h2>
        <Row>
          <Button onClick={decrement}>Sub Love</Button>
          <ResultBox />
          <Button onClick={increment}>Add Love</Button>
        </Row>
        <hr />
        <Button onClick={reset}>Reset</Button>
      </LoveBox>
      <Absolute>
        <Emoji l={love} />
      </Absolute>
    </JotaiPage>
  );
}

export default JotaiHome;

const JotaiPage = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LoveBox = styled.div`
  h2 {
    font-size: 20px;
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.div`
  border: 1px solid #00abf4;
  color: #00abf4;
  border-radius: 6px;
  padding: 20px;
  cursor: pointer;
  text-align: center;
`;

const Absolute = styled.div`
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  font-size: 40px;
`;
