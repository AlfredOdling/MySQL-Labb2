import React from 'react'

export default class IntroSection extends React.Component {

  render() {
    return (
      <div>
          <p id="hello">HELLO</p>
          <div id="intro">

          <p id="iam">I'm alfred ödling</p>
          {<img id="line" src={require('./assets/line.png')} alt="img" />}
          <p id="msc">MS.C INTERACTION & DESIGN STUDENT</p>

          <div id="boxContainer">

            <div id="box1" className="box">
              <div id="square1" className="squares" />
              <p>UX<br/>DESIGN</p>
            </div>

            <div id="box2" className="box">
              <div id="square2" className="squares" />
              <p>SERVICE<br/>DESIGN</p>
            </div>

            <div id="box3" className="box">
              <div id="square3" className="squares" />
              <p>FULL STACK<br/>DEVELOPMENT</p>
            </div>
            </div>
            </div>
        </div>
        )
      }
    }
