import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import ResetButton from "./components/ResetButton";
import FindMonkey from "./pages/findMonkey";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FindMonkey />
        <ResetButton />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App


