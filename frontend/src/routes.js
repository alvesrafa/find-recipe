import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Ingredient from './pages/Ingredient';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ingredients" component={Ingredient} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
