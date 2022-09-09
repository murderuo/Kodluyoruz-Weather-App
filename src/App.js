import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/Context/UserContext';
import Navbar from './components/pages/Navbar/Navbar';
import WebRoutes from './components/Routes/WebRoutes';
import './App.css';
import { LocationContextProvider } from './components/Context/LocationContext';
import { WeatherContextProvider } from './components/Context/WeatherContext';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <>
      <UserContextProvider>
        <LocationContextProvider>
          <WeatherContextProvider>
            <BrowserRouter>
              <ErrorBoundary
                fallback={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '20px',
                      width: '100%',
                      fontSize: '20px',
                    }}
                  >
                    There is something wrong ! in
                    <br />
                    Navbar component..
                  </div>
                }
              >
                <div>
                </div>
                  <Navbar />
              </ErrorBoundary>
              <WebRoutes />
            </BrowserRouter>
          </WeatherContextProvider>
        </LocationContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
