import React from 'react';
import { Route, Switch } from 'react-router-dom';

// The Page Components
import Home from './pages/home';
import Update from './pages/update';
import Detail from './pages/detail';
import NotFound from './pages/notfound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/restaurants/:id/update">
          <Update />
        </Route>
        <Route exact path="/restaurants/:id">
          <Detail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
