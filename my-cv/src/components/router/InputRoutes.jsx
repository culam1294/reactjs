import React from 'react';

import Home from '../Home';
import About from '../About';
import ManagerUsers from "../ManagerUsers/ManagerUsers";
import Title1 from "../Title1";
import Title2 from "../Title2";
import Title3 from "../Title3";


const routes = [
    {
      path: "Home",
      exact: true,
      main: () => <Home/>
    },
    {
      path: "About",
      main: () => <About/>
    },
    {
      path: "ManagerUser",
      main: () => <ManagerUsers/>
    },
    {
      path: "Technology",
      main: () => <Title1/>
    },
    {
      path: "News",
      main: () => <Title2/>
    },
    {
      path: "Weather",
      main: () => <Title3/>
    }
  ];

  export default routes;