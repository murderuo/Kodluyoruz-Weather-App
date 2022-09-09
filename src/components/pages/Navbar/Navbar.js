import { Link, useNavigate } from 'react-router-dom';
import withUserContext from '../../hoc/withUserContext/';
import { Button, ButtonsDiv, Header, NavBarDiv } from './StyledComp';
// import NavbarStyle from './navbar.module.css';

function Navbar({ isAuth, setIsAuth }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Header>
      <NavBarDiv>
        <Link to="/">Home</Link>
        {!isAuth && <Link to="/login">Login</Link>}
        {isAuth && (
          <ButtonsDiv>
            <Button onClick={handleLogout}>Logout</Button>
            {/* <button onClick={handleLogout}>Logout</button> */}
          </ButtonsDiv>
        )}
      </NavBarDiv>
    </Header>
  );
}

export default withUserContext(Navbar);
