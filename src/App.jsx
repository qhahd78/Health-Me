import { Reset } from "styled-reset";
import { Mobile } from "./assets/MediaQuery/MediaQuery";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Reset />
      <Mobile>
        <Main />
      </Mobile>
    </>
  );
}

export default App;
