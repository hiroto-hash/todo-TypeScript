import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main";
// import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


// const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/task" component={Main} />
        {/* <Route path='/task/:id' component={Main} />
    <Route path='/task/:id' component={Main} /> */}
      </Switch>
    </BrowserRouter>
  // </Provider>
  ,
  document.getElementById("root")
);
