import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Ingredient from './pages/Ingredient';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ingredients" component={Ingredient} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
