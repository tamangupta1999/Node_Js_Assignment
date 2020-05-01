import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/AboutComponent/About';
import AppLayout from './hoc/AppLayout';
import Users from './components/UsersComponent/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Users} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
