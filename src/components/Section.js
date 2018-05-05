import React, { Component } from 'react'
// import MasonryInfiniteScroller from 'react-masonry-infinite'

export default class Section extends Component {
  state = { selected: '', modal: false }

  setImage(selected) {
    this.setState({ selected, modal: selected ? true : false })
  }

  render() {
    const { modal, selected } = this.state
    return (
      <div className="section">
        {modal && (
          <React.Fragment>
            <div className="overlay" onClick={this.setImage.bind(this, null)}>
              <span className="close" onClick={this.setImage.bind(this, null)}>
                Close
              </span>
            </div>
            <div
              className="modal"
              style={{
                background: `url(${selected}) no-repeat fixed center`,
                position: 'fixed',
                top: 50,
                bottom: 50,
                left: 50,
                right: 50,
                zIndex: 2
              }}
            />
          </React.Fragment>
        )}
        {images.map(({ url }) => (
          // <div className="img-container">
          // <img src={`http://via.placeholder.com/${Math.floor((Math.random() * 800)+300)}x${Math.floor((Math.random() * 800)+300)}`} alt="" className="img-container" />
          <img
            src={url}
            className="img-container"
            onClick={this.setImage.bind(this, url)}
          />
          // </div>
        ))}
      </div>
    )
  }
}

const images = [
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5977004417bffc3fac73b632/1502870442940/end-of-line-Erik-Johansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  { url: 'http://via.placeholder.com/200x200' },
  { url: 'http://via.placeholder.com/7000x900' },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  },
  {
    url:
      'https://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/59770012b8a79bc2cb19286c/5a5e13cc0852296a836b4278/1516181248793/TheLightKeeper_ErikJohansson.jpg?format=500w'
  }
]
