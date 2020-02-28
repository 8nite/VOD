import React from "react";
import configureStore from "./store";
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

const { persistor } = configureStore();

export default class App extends React.Component {
  onChangeFilter = e => {
    this.props.dispatch(changeFilter(e.nativeEvent.target.value));
    //the images need to refresh
    //window.location.reload(5);
  };
  onEnded = e => {
    this.props.dispatch(updateWatched(e.nativeEvent.target.id));
    window.location.reload(1);
  };

  render() {
    return (
      <PersistGate persistor={persistor}>
        <Index filter={this.props.filter} changeFilter={this.onChangeFilter} onEnded={this.onEnded} watched={this.props.watched} />
      </PersistGate>
    );
  }
}
