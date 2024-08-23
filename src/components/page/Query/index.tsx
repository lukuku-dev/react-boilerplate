/* eslint-disable react-refresh/only-export-components */
import { useAtom } from "jotai";
import { InterfaceTodo, todoAtom } from "atom/todos.atom";
import styled from "styled-components";

function QueryPage() {
  const [{ data, isPending }] = useAtom(todoAtom);

  if (isPending) return null;

  return (
    <PageContainer>
      <Box>
        <h2>
          Fetched from Jotai with Query from
          `https://jsonplaceholder.typicode.com/todos/`
        </h2>
        <ul>
          {data.slice(0, 10).map((d: InterfaceTodo) => (
            <li key={d.id}>{d.title}</li>
          ))}
        </ul>
      </Box>
    </PageContainer>
  );
}

export default QueryPage;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Box = styled.div`
  h2 {
    font-size: 20px;
    text-align: center;
  }
  ul {
    list-style: none;
  }
  ul li {
    font-size: 14px;
    padding: 4px;
    text-align: center;
    color: #888;
  }
`;
