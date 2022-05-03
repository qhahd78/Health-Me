import GlobalStyle from "./assets/GlobalStyle/globalStyle";
import { Desktop, Mobile } from "./assets/MediaQuery/MediaQuery";
import Router from "./routes/router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Mobile>
        <Router />
      </Mobile>
      <Desktop>모바일만 지원합니다.</Desktop>
    </>
  );
}

export default App;
