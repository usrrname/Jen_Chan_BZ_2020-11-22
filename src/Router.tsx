import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginScreen } from './components/layouts/login/login';
import { SurveyScreen } from './components/layouts/survey/survey-layout';

export const Routes = () => {
  return (
    <Switch>
      <BrowserRouter>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/survey/:id" component={SurveyScreen} />
      </BrowserRouter>
    </Switch>
  )
}