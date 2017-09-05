import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./App"
import store from "./store/store"

import './index.css'

import axios from "axios";
window.axios = axios;

const root = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, root);

	