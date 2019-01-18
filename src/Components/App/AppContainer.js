import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import GlobalStyle from '../../globalStyle';

class AppContainer extends Component {
  render() {
    return (
      <>
        <AppPresenter />
        <GlobalStyle />
      </>
    );
  }
}

export default AppContainer;
