import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Modal, Button } from 'react-bootstrap';

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false };
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  //for Modal popup when clicked
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    //error checking
    if (this.props.entries && this.props.entries.every((entry) => { return entry.id && entry.images && entry.contents && entry.title && entry.images[0] && entry.images[0].url && entry.contents[0] && entry.contents[0].url })) {
      return (
        //Carousel containe list of videos
        <Carousel className="align-self-start" dynamicHeight={false} centerMode centerSlidePercentage={15} emulateTouch useKeyboardArrows={true} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false}>
          {this.props.entries.map((entry) =>
            <div className="container" key={entry.id}>
              <img src={entry.images[0].url} alt={entry.title} />
              <div className="legend">
                <video
                  width={230}
                  id={entry.id}
                  key={entry.id}
                  playsInline
                  light={entry.images[0].url}
                  playicon={'true'}
                  controls={false}
                  onEnded={this.props.onEnded}
                >
                  <source src={entry.contents[0].url} />
                </video>
                <p>{entry.title}</p>
                <Button variant="primary" onClick={this.showModal}>
                  More info
                </Button>

                <Modal show={this.state.show} onHide={this.hideModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>INFO</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><p>Description:<br />{entry.description}</p>
                    <p>Type:<br />{entry.type}</p>
                    <p>Published Date:<br />{new Date(entry.publishedDate).toString()}</p>
                    <p>Available Date:<br />{new Date(entry.availableDate).toString()}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}>
                      Close
                </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          )}
          <div />
        </Carousel>
      )
    }
    else {
      return (
        null
      )
    }
  }
}

export default Video
