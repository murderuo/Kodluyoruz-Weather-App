import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/";
import Login from "../pages/Login/";
import Main from "../pages/Main/";

function WebRoutes() {
  return (
    <div>
      <div className="links">
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default WebRoutes;
