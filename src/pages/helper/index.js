import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from './Auth';

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         (isLoggedIn())
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )

// export const PublicRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         (!isLoggedIn())
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//     )} />
// )