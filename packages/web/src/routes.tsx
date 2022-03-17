import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import { HomeView, AuctionView } from './views';
import { AdminView } from './views/admin';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/admin">
              <AdminView />
            </Route>
            <Route path="/collections/:id">
              <AuctionView />
            </Route>
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
