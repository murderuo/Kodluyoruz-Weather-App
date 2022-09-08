import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/";
import Main from "../pages/Main/";

function WebRoutes() {
  return (
    <div>
      <div className="links">
        {/* <BrowserRouter> */}
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "20px",
                      width: "100%",
                      fontSize: "20px",
                    }}
                  >
                    There is something wrong ! in
                    <br />
                    ItemListener component..
                  </div>
                }
              >
                <Main />
              </ErrorBoundary>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          {/* <Route path="/main" element={<Main />} /> */}
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default WebRoutes;
