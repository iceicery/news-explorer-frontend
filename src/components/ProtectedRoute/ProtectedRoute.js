import React, { useEffect } from 'react';
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ Component, isLogin, handleSigninOpen, ...props }) {
    useEffect(() => {
        if (!isLogin) {
            handleSigninOpen();
        }
    })

    return (
        <Route>
            {
                () => isLogin ?
                    <Component isLogin={isLogin} {...props} /> :
                    < Redirect to="/" />
            }
        </Route>
    )
}