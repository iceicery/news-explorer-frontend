import React from 'react';
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ Component, isLogin, ...props }) {
    return (
        <Route>
            {
                () => isLogin ?
                    <Component isLogin={isLogin} {...props} /> :
                    <Redirect to="/" />
            }
        </Route>
    )
}