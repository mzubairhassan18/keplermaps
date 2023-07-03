// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
require("file-loader?name=[name].[ext]!../index.html");
import React from "react";
import document from "global/document";
import { Provider } from "react-redux";
import { browserHistory, Router, Route } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { render } from "react-dom";
import store from "./store";
import App from "./app";
import { buildAppRoutes } from "./utils/routes";
import Website from "./website";
import MyAccount from "./containers/MyAccount";
import Pricing from "./containers/Pricing";
import PageCloud from "./containers/PageCloud";
import OurServices from "./containers/OurServices";
import PageHome from "./containers/PageHome";
import PageData from "./containers/PageData";

const history = syncHistoryWithStore(browserHistory, store);

const appRoute = buildAppRoutes(App);

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/mrscmaps" component={App}>
        {appRoute}
      </Route>
      <Route path="/" component={PageHome}>
        {appRoute}
      </Route>
      <Route path="/my-account" component={MyAccount} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/cloud" component={PageCloud} />
      <Route path="/data" component={PageData} />
      <Route path="/services" component={OurServices} />
    </Router>
  </Provider>
);

render(<Root />, document.body.appendChild(document.createElement("div")));
