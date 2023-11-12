import React from 'react';
import NavigationBar from '../Component/Shared/Navigation/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogInLayOut = () => {
      return (
            <div>
                 <NavigationBar></NavigationBar>
                 <Outlet></Outlet>
            </div>
      );
};

export default LogInLayOut;