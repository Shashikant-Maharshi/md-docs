import React, {
  Suspense,
} from 'react';
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "../shared/components/ErrorBoundary/ErrorBoundary";

import LoggedInRoutes from "./components/LoggedInRoutes/LoggedInRoutes";
import LoggedOutRoutes from "./components/LoggedOutRoutes/LoggedOutRoutes";
import useUserSession from "./hooks/user-session.hook";

const App = () => {
  const userSession = useUserSession();

  const renderLoader = () => (
    <div>Loading...</div>
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={renderLoader()}>
        <BrowserRouter>
          {userSession
            ? <LoggedInRoutes />
            : <LoggedOutRoutes />
          }
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
