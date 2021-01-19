import React from 'react';
import Container from '@material-ui/core/Container';
import {} from "./MainPageRouter.css"
import SignIn from "../Header/SignIn/SignIn"
import HomePage from "./HomePage/HomePage"


import { Route, Switch } from 'react-router-dom';

class MainPageRouter extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Switch>
              <Route exact path="/">
             
              <HomePage/>
              </Route>
              <Route path="/about">
              <Container component="main"
            disableGutters={true}
            maxWidth={false}
            className="main"
            style= {{height: '100vh'}}
          >
          About
          </Container>
              </Route>
              <Route path="/login">
                <SignIn />
              </Route>
            </Switch>
            </React.Fragment>
            
        )
        }
    }

export default MainPageRouter