import styled from "styled-components";

function TopInformation() {
  return (
    <InfoBox>
      <a href="https://www.lukuku.co/" target="_blank">
        <img src="/lukuku.png" alt="" width={80} height={80} />
      </a>
      <h1>React Boilerplate - Lukuku ❤️</h1>

      <h2>Ingredients</h2>
      <ul>
        <li>React - Vite</li>
        <li>Typescript - SWC</li>
        <li>Styled-components</li>
        <li>react-router (v6)</li>
        <li>Jotai</li>
        <li>react-query</li>
      </ul>
    </InfoBox>
  );
}

export default TopInformation;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  a {
    display: inline-block;
  }

  h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 18px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    font-size: 14px;
    padding: 4px;
    text-align: center;
    color: #888;
  }
`;
