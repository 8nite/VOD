import React from 'react'
import VideoList from './VideoList'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_NOT_SECRET_CODE + '/?filter=' + this.props.filter)
      .then(response => response.json())
      .then(entries => {
        this.setState(entries)
      });
  }

  render() {
    return (
      <div>
        <Header changeFilter={this.props.changeFilter}/>
        <VideoList entries={this.state.entries} filter={this.props.filter} watched={this.props.watched} onEnded={this.props.onEnded}/>
      </div>          
    )
  }
}

export default Index
