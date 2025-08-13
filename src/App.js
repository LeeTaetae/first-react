import './App.css';
// import Jsx01 from './Jsx01';
import React from 'react';
import router from './docs/routes/router';
import { RouterProvider } from "react-router-dom";


function App() {
  return (
   <React.Fragment>
    <RouterProvider router={router} />
   </React.Fragment>
  );
}

export default App;
