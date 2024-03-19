/*import React, { Component } from "react";
import Product from "./Component/Product";

class App extends Component {
  render() {
    return (
      <>

        <h1>I'ts Working</h1>
        <h3>This is Your First Day Practice</h3>
        <Product productrowno={123} />
      </>
    );
  }
}
export default App; */

import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productfun from './Component/Funcomp/Productfun'
import Birthday from './Component/Funcomp/Birthday';
import Appcallcom from './Component/Funcomp/Appcallcom';
import Mountcomp from './Component/Funcomp/Mountcomp';
import Navbarcom from './Component/Common/Navbarcom';
import Formreact from './Component/Funcomp/Formreact'
import Groceryprojc from './Component/Funcomp/Groceryprojc';
import Reacthookform from './Component/Reacthook/Reacthookform';
import Todolist from './Component/Todo/Todolist';
import Headercomp from './Component/Propsdrilling/Headercomp';
import Useref from './Useref';
import Countcomp from './Component/Countcomp';
import Product from './Component/Product';
import Allmain from './Allpractice/Allmain';




function App() {

  return (
    <div>
      {/* <Allmain /> */}
      {/* <Birthday/> */}
      {/* <Productfun /> */}
      {/* <Mountcomp/> */}
      {/* <Navbarcom/> */}
      {/* <Formreact/> */}
      {/* <Groceryprojc/> */}
      <Todolist/>
      {/* <Useref/> */}
      
      {/* <Headercomp/>   --------------------propsdrilling  */}
      {/* <Countcomp /> */}
      {/* <Product /> */}

      {/* <Appcallcom/> */}
      {/* {/* <Reacthookform/> */}
      </div>
  )
}
export default App