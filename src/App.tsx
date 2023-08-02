import styled from "styled-components";
import NewStyle from "./CommentList";
import CommentList from "./CommentList";
import GlobalStyles from "./GlobalStyles.ts";

function App() {
  return (
    <Conatiner>
      <GlobalStyles />
      <CommentList />
    </Conatiner>
  );
}

export default App;

const Conatiner = styled.div`
  max-width: 730px;

  border-radius: 8px;
  /* background: var(--white, #fff); */
`;
