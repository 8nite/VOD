import React from "react";
import { render } from "react-dom";
import configureStore from "./store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Index from './components/Index'

// action creator for redux
function changeFilter(text) {
  return {
    type: "CHANGEFILTER",
    text
  };
}

function updateWatched(text) {
  return {
    type: "UPDATEWATCHED",
    text
  };
}

const { store, persistor } = configureStore({
  root: {
    watched: [],
    filter: null,
    entries: []
  }
});

class App extends React.Component {
  onChangeFilter = e => {
    this.props.dispatch(changeFilter(e.nativeEvent.target.value));
    //the images need to refresh
    window.location.reload(false);
  };
  onEnded = e => {
    this.props.dispatch(updateWatched(e.nativeEvent.target.id));
    window.location.reload(false);
  };

  render() {
    return (
      <PersistGate persistor={persistor}>
        <Index filter={this.props.filter} changeFilter={this.onChangeFilter} onEnded={this.onEnded} watched={this.props.watched} />
      </PersistGate>
    );
  }
}

const mapStateToProps = state => ({
  watched: state.root.watched,
  filter: state.root.filter
});

const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
