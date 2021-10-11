import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import themeFile from "./util/theme";
import JwtDecode from "jwt-decode";

//  Components
import Navbar from "./components/layout/Navbar";
 import AuthRoute from "./util/AuthRoute";


//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import {SET_AUTHENTICATED } from './redux/types'
import {logoutUser, getUserData,getAllMembers } from './redux/actions/userActions';
import axios from "axios";


//  Pages
import Home from "./pages/Home";
import marketPlace from "./pages/marketPlace";
import news from "./pages/news";
import galoreSocial from "./pages/galoreSocial";
import galoreSports from "./pages/galoreSports";
import login from "./pages/login";
import signup from "./pages/signup";
//import Footer from './components/Footer/Footer'

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL = 'https://us-central1-galorelsocials-e63a0.cloudfunctions.net/api'



const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = JwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = "/login";
  } else {
    store.dispatch({type: SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization'] = token
    store.dispatch(getUserData());
      
  }
}


function App() {
  //const[logedIn, setlogedIn] = useState()
    
     
    return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
        <Router>
        {/* <Navbar/>  */}
         {/* //<Navbar{...{logedIn}}/> */}
             <div className="container">
              <Switch> 
                <Route exact key={0} path="/" component={Home} />
                <Route exact key={1} path="/marketPlace" component={marketPlace} />
                <Route exact key={2} path="/news" component={news} />
                <Route exact key={3} path="/galoreSocial" component={galoreSocial} />
                <Route exactkey={4}  path="/galoreSports" component={galoreSports} />
                <Route exact key={5} path="/login"  component={login}/>
                <Route exact key={6} path="/signup" component={signup} />
                {/* <Route exact key={7} path="/logout" component={logout} /> */}
              </Switch>
            </div>
        </Router>
        </Provider>
      </MuiThemeProvider>   
      </div>  
      );
}

export default App;
