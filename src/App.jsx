import { RoutesApp } from "./routes";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000}/>
      <RoutesApp />
      <GlobalStyle />
    </>
  );
}

export default App;
