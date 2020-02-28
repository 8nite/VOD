import React from "react";
import configureStore from "./store";
import { Provider, connect } from "react-redux";
import App from './App'
import ReactDOM from 'react-dom'

// action creator for redux
const { store } = configureStore({
  root: {
    watched: [],
    filter: null,
    entries: []
  }
});

export const mapStateToProps = state => ({
  watched: state.root.watched,
  filter: state.root.filter
});

const ConnectedApp = connect(mapStateToProps)(App);

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    )
  }
}