import React from 'react'

class BoxOneCard extends React.Component  {
  state = {
    isActive: 'modal'
  }
  render() {

    const toggleModal = () => {
      if (this.state.isActive === 'modal is-active') {
        this.setState({ isActive: 'modal' })
      } else {
        this.setState({ isActive: 'modal is-active' })
      }
    }

    return (
      <>

              
              
        <article onClick={toggleModal} className="message is-warning" id="box1">
          <div className="message-body">
              BOX 1
          </div>
        </article>
              

        <div className={this.state.isActive}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
      stufffy stuff stuff
            </section>
            <footer className="modal-card-foot">
              <button className="button" onClick={toggleModal}>Cancel</button>
            </footer>
          </div>
        </div>
              
      </>
    )
  }
}

export default BoxOneCard