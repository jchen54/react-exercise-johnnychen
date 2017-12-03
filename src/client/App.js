import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductPageContainer from './components/productPage/containers/ProductPageContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ProductPageContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;
