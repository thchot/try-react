import './App.css';
import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import Footer from "./Footer/Footer";
import MainPage from "./MainPage/MainPageRouter"
import Header from "./Header/Header"
import { StylesProvider } from "@material-ui/core/styles";

import { MemoryRouter as Router } from 'react-router-dom';


class App extends React.Component {



  render() {
    return (

      <StylesProvider injectFirst>
        <ScopedCssBaseline>
          <Router>
            <Header />

           


            <MainPage />

           
          </Router>
          <Footer />
        </ScopedCssBaseline>
      </StylesProvider>
    );
  }
}



export default App;
