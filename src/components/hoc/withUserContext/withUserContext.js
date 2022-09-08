import { useContext } from "react";
import UserContext from "../../Context/UserContext";

const withUserContext = (WrappedComponent) => {
  const NewComponent = (props) => {
    const { isAuth, setIsAuth } = useContext(UserContext);

    return (
      <WrappedComponent
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default withUserContext;
