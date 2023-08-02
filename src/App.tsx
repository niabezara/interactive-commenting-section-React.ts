import styled from "styled-components";
import CommentList from "./CommentList";
import GlobalStyles from "./GlobalStyles.ts";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Conatiner>
        <GlobalStyles />
        <CommentList />
      </Conatiner>
    </>
  );
}

export default App;

const Conatiner = styled.div`
  max-width: 730px;

  border-radius: 8px;
  /* background: var(--white, #fff); */
`;
