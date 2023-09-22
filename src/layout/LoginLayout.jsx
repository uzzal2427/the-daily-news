import React from 'react';
import Header from '../pages/Shared/Header/Header';
import SimpleNav from '../pages/Shared/SinpleNav/SimpleNav';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <SimpleNav></SimpleNav>
            <Outlet></Outlet>

        </div>
    );
};

export default LoginLayout;