import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './components/Router/AppRouter'
import createAppStore from './components/state/createAppStore'

function App() {
  return (
   <Provider store={createAppStore()}>
       <Fragment>
         <AppRoutes/>

       </Fragment>

   </Provider>
  );
}

export default App;
