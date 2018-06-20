import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CoursePage from './pages/CoursePage/CoursePage';

class App extends React.Component<any, any> {

  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path='/' component={CatalogPage} />
          <Route exact={true} path='/course/:courseid' component={CoursePage} />
        </Switch>
      </div>
    );
  }

}

export default App;
