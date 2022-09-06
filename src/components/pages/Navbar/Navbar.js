import { Link, useNavigate } from "react-router-dom";
import withUserContext from "../../hoc/withUserContext/";
import { NavBarDiv } from "./StyledComp";

function Navbar({ isAuth, setIsAuth }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <NavBarDiv>
      <Link to="/">Home</Link>
      {!isAuth && <Link to="/login">Login</Link>}
      {/* <Link to="/main">Main</Link> */}
      {isAuth && <button onClick={handleLogout}>Logout</button>}
    </NavBarDiv>
  );
}

export default withUserContext(Navbar);
