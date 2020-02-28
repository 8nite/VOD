import React from 'react';
import ReactDOM from 'react-dom'
import AppConnector from './AppConnector'

window.addEventListener("load", init);

export function init() {
  ReactDOM.render(
    <AppConnector />,
    document.getElementById('root')
  )
}