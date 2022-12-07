import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Flex from '@twilio/flex-ui';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const history = createBrowserHistory();

// @ts-ignore
Flex.Manager.create({
  // router: {
  //   type: 'browser',
  // },
}).then((manager) => {
  root.render(
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            // @ts-ignore
            <Flex.ContextProvider manager={manager}>
              <Flex.RootContainer />
            </Flex.ContextProvider>
          )}
        />
        <Route
          path="/hi"
          component={() => {
            setTimeout(
              () => Flex.Actions.invokeAction('HistoryPush', '/'),
              5000
            );
            return <div>Hi! I will redirect to Flex in 5 seconds flat!</div>;
          }}
        />
      </Switch>
    </Router>
  );
});
