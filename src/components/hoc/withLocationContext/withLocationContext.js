import { useContext } from "react";
import LocationContext from "../../Context/LocationContext";

const withLocationContext = (WrappedComponent) => {
  const NewComponent = (props) => {
    const { location, setLocation, locationValue } =
      useContext(LocationContext);

    return (
      <WrappedComponent
        location={location}
        setLocation={setLocation}
        locationValue={locationValue}
        // setLocationValue={setLocationValue}
        {...props}
      ></WrappedComponent>
    );
  };

  return NewComponent;
};

export default withLocationContext;
