import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { removeUserSesion } from "../../../shared/utilities/localstorage";
import { EventTypes } from "../../../shared/constants/session-event-types.constants";

const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    removeUserSesion();
    
    // let the app know user logged-out to load logout-routes
    const event = new Event(EventTypes.OnLogout);
    window.dispatchEvent(event);
    
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
