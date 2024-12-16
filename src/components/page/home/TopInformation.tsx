import styled from "styled-components";
import packageJson from "../../../../package.json";

function TopInformation() {
  return (
    <InfoBox>
      <a href="https://www.lukuku.co/" target="_blank">
        <img src="/lukuku.png" alt="" width={80} height={80} />
      </a>
      <h1>React Boilerplate - Lukuku ❤️</h1>

      <h2>Ingredients</h2>
      <ul>
        {Object.keys(packageJson.dependencies).map((key) => (
          <li key={key}>
            {key}{" "}
            {
              packageJson.dependencies[
                key as keyof typeof packageJson.dependencies
              ]
            }
          </li>
        ))}
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
