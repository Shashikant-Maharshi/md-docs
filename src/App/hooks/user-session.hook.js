import {
  useEffect,
  useState,
} from 'react';

import { getLoggedInUserSession } from "../../shared/utilities/localstorage";
import { EventTypes } from "../../shared/constants/session-event-types.constants";

const useUserSession = () => {
  const [userSession, setUserSession] = useState(null);

  const handleEvents = (event) => {
    if (event.type === EventTypes.OnLogin) {
      setUserSession(getLoggedInUserSession());
    } else if (event.type === EventTypes.OnLogout) {
      setUserSession(null);
    }
  };

  useEffect(() => {
    setUserSession(getLoggedInUserSession());

    window.addEventListener(EventTypes.OnLogin, handleEvents);
    window.addEventListener(EventTypes.OnLogout, handleEvents);

    return () => {
      window.removeEventListener(EventTypes.OnLogin, handleEvents);
      window.removeEventListener(EventTypes.OnLogout, handleEvents);
    };
  }, []);

  return userSession;
};

export default useUserSession;
