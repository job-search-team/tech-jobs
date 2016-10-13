import React from 'react'
import ReactDOM, { render } from 'react-dom'
const domready = require('domready')
import App from './components/app'
import {HashRouter} from 'react-router'

const feathers = require('feathers-client') // fetahers-client
// const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
// const io = require('socket.io-client');

const api = feathers()
  // .configure(feathers.socketio(socket))
  .configure(feathers.rest('http://localhost:3030').fetch(fetch))
  // Use localStorage to store our login token
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  // .configure(feathers.authentication({
  //   storage: window.localStorage
  // }))

domready(() => {
  ReactDOM.render(
    <HashRouter>
      {({router}) => {
        return (
        <App router={router} api={api}/>
        )
      }}
    </HashRouter>
    , document.querySelector('main')
  )
})
