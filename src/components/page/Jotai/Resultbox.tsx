import styled from "styled-components";
import { useAtom } from "jotai";
import { loveAtom } from "../../../atom/love.atom";

function ResultBox() {
  const [love] = useAtom(loveAtom);

  return <ResultWrapper>{love}</ResultWrapper>;
}

export default ResultBox;

const ResultWrapper = styled.div`
  width: 200px;
  text-align: center;
  border: 1px solid #0a6992;
  background-color: #0a6992;
  color: #fff;
  border-radius: 6px;
  padding: 20px;
`;
