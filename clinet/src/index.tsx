import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/task" component={Main} />
        {/* <Route path='/task/:id' component={Main} />
    <Route path='/task/:id' component={Main} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
