import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel';
import { Modal, Button } from 'react-bootstrap';

const Video = ({ entries, onEnded }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {Array.isArray(entries) && entries.length > 0 ? (
        <Carousel useKeyboardArrows='true'>
          {entries.map((entry) =>
            <div style={{ "height": "717px" }}>
              <img src={entry.images[0].url} alt={entry.title} />
              <p className="legend">
                <video
                  id={entry.id}
                  key={entry.id}
                  controls='false'
                  playsInline
                  light={entry.images[0].url}
                  playIcon
                  onEnded={onEnded}
                >
                  <source src={entry.contents[0].url} />
                </video>
                <p><a href={entry.contents[0].url}>{entry.title}</a></p>
                <Button variant="primary" onClick={handleShow}>
                  More info
              </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>INFO</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><p>Description:<br/>{entry.description}</p>
                    <p>Type:<br/>{entry.type}</p>
                    <p>Published Date:<br/>{new Date(entry.publishedDate).toString()}</p>
                    <p>Available Date:<br/>{new Date(entry.availableDate).toString()}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                </Button>
                  </Modal.Footer>
                </Modal>
              </p>
            </div>
          )}
        </Carousel>
      ) : (null)
      }
    </>
  )
}

Video.propTypes = {
  entries: PropTypes.array.isRequired,
  onEnded: PropTypes.func.isRequired
}

export default Video
