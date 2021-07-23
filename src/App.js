import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>...loading</div>} persistor={persistor}>
        <Router>
          <React.Suspense fallback={<div>...loading</div>}>
            <Switch>
              {routes.map((item, index) => (
                <PrivateRoute
                  key={index}
                  path={item.path}
                  loginRequired={item.loginRequired}
                  exact={item.expect}
                >
                  <item.component />
                </PrivateRoute>
              ))}
            </Switch>
          </React.Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
