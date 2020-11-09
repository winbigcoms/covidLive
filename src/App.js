import React from "react";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./redux/create";
import { HomePage } from "./page/HomePage";
import { NotFoundPage } from "./page/NotFoundPage";
import { SigninPage } from "./page/SigninPage";
import { ErrorPage } from "./page/ErrorPage";
import ChartPage from "./page/ChartPage";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/signin" component={SigninPage} />
          <Route path="/compare" exact component={ChartPage} />
          <Route path="/covidLive" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
