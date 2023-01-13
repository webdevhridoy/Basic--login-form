import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Authentication from '../components/Authentication/Authentication';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Authentication></Authentication>
    }
]);

export default Routes;