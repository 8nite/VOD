import React from 'react'
import Video from './Video'

class VideoList extends React.Component {
  render() {
    if (this.props.entries) {
      return (
        <div className="container-fluid">
          <div>
            {this.props.filter && (this.props.filter !== '' && this.props.filter !== 'history') ? (
              <>
                <div className="col align-self-start">
                  {this.props.filter}
                </div>
                <div>
                  <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === this.props.filter))} onEnded={this.props.onEnded} />
                </div>
              </>
            ) : this.props.filter !== 'history' ? (
              <>
                <div>
                  <div className="col align-self-start">
                    movies-comedy
                    </div>
                  <div>
                    <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-comedy'))} onEnded={this.props.onEnded} />
                  </div>
                </div>
                <div>
                  <div className="col align-self-start">
                    movies-biography
                    </div>
                  <div>
                    <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-biography'))} onEnded={this.props.onEnded} />
                  </div>
                </div>
                <div>
                  <div className="col align-self-start">
                    movies-action
                    </div>
                  <div>
                    <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-action'))} onEnded={this.props.onEnded} />
                  </div>
                </div>
                <div>
                  <div className="col align-self-start">
                    movies-mystery
                    </div>
                  <div>
                    <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-mystery'))} onEnded={this.props.onEnded} />
                  </div>
                </div>
                <div>
                  <div className="col align-self-start">
                    movies-horror
                    </div>
                  <div>
                    <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-horror'))} onEnded={this.props.onEnded} />
                  </div>
                </div>
                <div>
                  <div className="col align-self-start">
                    movies-drama
                    </div>
                  <div>
                    <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-drama'))} onEnded={this.props.onEnded} />
                  </div >
                </div>
                <div>
                  <div className="col align-self-start">
                    movies-crime
                    </div>
                  <div>
                    <Video entries={this.props.entries.filter((entry) => entry.categories.some((category) => category.id === 'movies-crime'))} onEnded={this.props.onEnded} />
                  </div >
                </div>
              </>
            ) : (null)
            }
          </div >
          {
            Array.isArray(this.props.watched) && this.props.watched.length > 0 && this.props.entries.some((entry) => this.props.watched.includes(entry.id)) ? (
              <div>
                <div className="col align-self-start">
                  Watch Again
        </div>
                <div>
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
