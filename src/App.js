import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./components/Context/UserContext";
import Navbar from "./components/pages/Navbar/Navbar";
import WebRoutes from "./components/Routes/WebRoutes";
import "./App.css";
import { LocationContextProvider } from "./components/Context/LocationContext";
import { WeatherContextProvider } from "./components/Context/WeatherContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <LocationContextProvider>
          <WeatherContextProvider>
            <BrowserRouter>
              <Navbar />
              <WebRoutes />
            </BrowserRouter>
          </WeatherContextProvider>
        </LocationContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
