import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/";
import Main from "../pages/Main/";

function WebRoutes() {
  return (
    <div>
      <div className="links">
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Main />} />
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
