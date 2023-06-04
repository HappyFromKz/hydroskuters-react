import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../router";

const AppRouter = () => {

  return (
    <Routes>
      {routes.map(route =>
        <Route
          element={route.component}
          path={route.path}
          key={route.path}
        />
      )}
    </Routes>
  );
};

export default AppRouter;
