import React from "react";
import { Switch, Route, Router, RouterProps } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Accounts from "./components/Accounts";

const generateClassName = createGenerateClassName({
  productionPrefix: "ac",
});

export default ({ history }: RouterProps) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Accounts} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
