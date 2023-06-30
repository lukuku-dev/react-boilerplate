import styled from "styled-components";

function LowerMenu() {
  return (
    <LowerBox>
      <nav>
        <ul>
          <li>
            <a href={`/jotai-sample`}>Jotai Sample</a>
          </li>
          <li>
            <a href={`/jotai-query`}>React Query and Jotai Sample</a>
          </li>
        </ul>
      </nav>
    </LowerBox>
  );
}

export default LowerMenu;

const LowerBox = styled.div``;
