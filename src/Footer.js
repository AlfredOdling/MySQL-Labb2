import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <p>Contact me: alfred.odling@hotmail.se</p>
        <img id="qr" src={require('./assets/qr.png')} alt="img" />
      </div>
    )
  }
}
