import React, {Suspense} from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDom.render(
  <Suspense fallback = {null}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)
