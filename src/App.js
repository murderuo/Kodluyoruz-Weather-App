import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./components/Context/GlobalContext";
import Navbar from "./components/pages/Navbar/Navbar";
import WebRoutes from "./components/Routes/WebRoutes";

function App() {
  return (
    <div>
      This is App
      <GlobalContextProvider>
        <BrowserRouter>
          <Navbar />
          <WebRoutes />
        </BrowserRouter>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
