import styled from "styled-components";

function LowerMenu() {
  return (
    <LowerBox>
      <h5>Check The Examples ⤵</h5>
      <nav>
        <ul>
          <li>
            <a href={`/jotai-sample`}>📦 Jotai Sample</a>
          </li>
          <li>
            <a href={`/jotai-query`}>📫 React Query and Jotai Sample</a>
          </li>
        </ul>
      </nav>
    </LowerBox>
  );
}

export default LowerMenu;

const LowerBox = styled.div`
  text-align: center;
  ul {
    list-style: none;
  }
  li {
    padding: 4px;
  }
  li a {
    font-style: italic;
    color: #00abf4;
  }
`;
