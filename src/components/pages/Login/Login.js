import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../Context/UserContext";
import { ContainerDiv, InputDiv } from "./StyledComp";

function LoginPage() {
  const { isAuth, setIsAuth } = useContext(GlobalContext);
  const [user, setUser] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  useEffect(() => {
    const LoggedUser = JSON.parse(localStorage.getItem("user"));
    LoggedUser?.isAuth ? setIsAuth(true) : setIsAuth(false);
    LoggedUser?.isAuth ? navigate("/") : navigate("/login");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    isAuth ? navigate("/") : navigate("/login");
    // eslint-disable-next-line
  }, [isAuth]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (user.username === "admin" && user.password === "admin") {
      setIsAuth(true);
      const locaStorageUser = JSON.stringify({ ...user, isAuth: true });
      localStorage.setItem("user", locaStorageUser);
    }
  };

  return (
    <div>
      <ContainerDiv>
        <InputDiv>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
          />
        </InputDiv>
        <InputDiv>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </InputDiv>
        <button onClick={handleLogin}>Login!</button>
        <div id="error"></div>
      </ContainerDiv>
    </div>
  );
}

export default LoginPage;
