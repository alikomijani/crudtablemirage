import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
function PrivateRoute({ loginRequired, path, exact, children }) {
    const isLogin = useSelector(state => state.auth.isLogin)
    return (
        <Route
            path={path}
            exact={exact}
            render={({ location }) =>
                (loginRequired && !isLogin) ? (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />) :
                    children
            }
        />
    )

}

export default PrivateRoute
