import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./route/router";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
