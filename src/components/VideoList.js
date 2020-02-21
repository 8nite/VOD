import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'

const VideoList = ({ entries, filter, watched, onEnded }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col align-self-start">
        {filter}
      </div>
      <div className="col align-self-center">
        {entries && filter && filter !== '' ? (
          <Video entries={entries.filter((entry) => entry.categories.some((category) => category.id === filter))} onEnded={onEnded} />
        ) : (<Video entries={entries} onEnded={onEnded} />)}
      </div>
    </div>
    {Array.isArray(watched) && watched.length > 0 && entries.some((entry) => watched.includes(entry.id)) ? (
      <div className="row">
        <div className="col align-self-start">
          Watch Again
        </div>
        <div className="col align-self-center">
          <Video entries={entries.filter((entry) => watched.includes(entry.id))} onEnded={onEnded} />
        </div>
      </div>
    ) : (null)
    }
  </div>
)

VideoList.propTypes = {
  entries: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  watched: PropTypes.array.isRequired,
  onEnded: PropTypes.func.isRequired
}

export default VideoList
