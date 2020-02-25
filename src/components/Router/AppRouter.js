import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'
import Login from '../Login/login'
import Home from '../Home/home'
import {NavBar} from './header'


 export default class AppRouter extends React.Component {

 
 
 
 render() {
    
   
   return(

    <BrowserRouter>
         <NavBar/>
       <Switch>
                <Route path='/' component={Login} exact={true} />
                <Route path='/list' component={Home} />
                <Route path='/search' component={Home} />
               
            </Switch>
    
    </BrowserRouter>

 )
   }
}

//  export default AppRouter