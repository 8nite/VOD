import React from 'react'
import Video from './Video'

class VideoList extends React.Component {
  render() {
    if (this.props.entries) {
      return (
        <div className="container-fluid">
          <div className="row">
            {this.props.entries && this.props.filter && this.props.filter !== '' ? (
              <>
                <div className="col align-self-start">
                  {this.props.filter}
                </div>
                <div className="col align-self-center">
                  <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === this.props.filter))} onEnded={this.props.onEnded} />
                </div>
              </>
            ) : (
                <>
                  <div className="row w-100">
                    <div className="col align-self-start">
                      movies-comedy
                    </div>
                    <div className="col align-self-center">
                      <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-comedy'))} onEnded={this.props.onEnded} />
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col align-self-start">
                      movies-biography
                    </div>
                    <div className="col align-self-center">
                      <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-biography'))} onEnded={this.props.onEnded} />
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col align-self-start">
                      movies-action
                    </div>
                    <div className="col align-self-center">
                      <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-action'))} onEnded={this.props.onEnded} />
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col align-self-start">
                      movies-mystery
                    </div>
                    <div className="col align-self-center">
                      <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-mystery'))} onEnded={this.props.onEnded} />
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col align-self-start">
                      movies-horror
                    </div>
                    <div className="col align-self-center">
                      <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-horror'))} onEnded={this.props.onEnded} />
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col align-self-start">
                      movies-drama
                    </div>
                    <div className="col align-self-center">
                      <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-drama'))} onEnded={this.props.onEnded} />
                    </div >
                  </div>
                  <div className="row w-100">
                    <div className="col align-self-start">
                      movies-crime
                    </div>
                    <div className="col align-self-center">
                      <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-crime'))} onEnded={this.props.onEnded} />
                    </div >
                  </div>
                </>
              )}
          </div >
          {
            Array.isArray(this.props.watched) && this.props.watched.length > 0 && this.props.entries.some((entry) => this.props.watched.includes(entry.id)) ? (
              <div className="row">
                <div className="col align-self-start">
                  Watch Again
        </div>
                <div className="col align-self-center">
                  <Video entries={this.props.entries.filter((entry) => this.props.watched.includes(entry.id))} onEnded={this.props.onEnded} />
                </div>
              </div>
            ) : (null)
          }
        </div >
      )
    }
  }
}

export default VideoList
