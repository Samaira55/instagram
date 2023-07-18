import React from 'react';
import Navbar from './component/Navbar';
import Dashboard  from './component/Dashboard';
// import Subnav from './component/Subnav';
// import Login from './component/Login';
// import Logout from './component/Logout';
// import AppRouting from './Routes/AppRoutes';
// import {Outlet} from 'react-router-dom';

function App() {
  

  return (
    <div>
        {/* <AppRouting/> */}
        {/* <div><Outlet /></div> */}
        <Navbar/>
        <Dashboard/>
      {/* <Login/> */}
       {/* <Logout/> */}
       
        {/* <Subnav/> */}
        {/* <Dashboard/> */}
        

    </div>
  );
}

export default App;