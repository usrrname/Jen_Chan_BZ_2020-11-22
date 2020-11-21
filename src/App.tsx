import React from 'react';
import './App.scss';
import { RouteProps, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Routes } from './Router';

const App = (props: RouteProps) => {
  return (
    <TransitionGroup>
      <CSSTransition
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName="SlideIn"
        key={props.location?.key}
        classNames="appear"
        timeout={{ enter: 300, exit: 300 }}
      >
        <Routes />

      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(App);