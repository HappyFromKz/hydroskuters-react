import React, {useContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {CategoryContext} from "../context";

const AppRouter = () => {
  const [isAuth] = useState(true)

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            element={route.component}
            path={route.path}
            key={route.path}
          />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
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
