import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import { AdminView } from './views/admin';
import { AuctionView } from './views/auction';
import { HomeView } from './views/home';


export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route path="/" component={() => <HomeView />} />
            <Route exact path="/admin" component={() => <AdminView />} />
            <Route
              // exact
              path="/collections/:id"
              component={() => <AuctionView />}
            />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
