import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./styles/styles.css";
import "./styles/carousel.css";
import "./styles/hover-min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends React.Component {
  state = {
    showMore: false,
    cardID: [],
    cards: [
      {
        id: "badrums",
        src: "badrums.png"
      },
      {
        id: "tremory",
        src: "tremory.png"
      },
      {
        id: "cinnober",
        src: "cinnober.png"
      },
      {
        id: "phocus",
        src: "phocus.png"
      },
      {
        id: "fresh",
        src: "fresh.png"
      },
      {
        id: "hikikomori",
        src: "hikikomori.png"
      }
    ],
    badrums: [
      { src: require("./assets/images/badrumsboden/1.png") },
      { src: require("./assets/images/badrumsboden/2.png") },
      { src: require("./assets/images/badrumsboden/3.png") }
    ],
    tremory: [
      { src: require("./assets/images/tremory/1.png") },
      { src: require("./assets/images/tremory/2.png") },
      { src: require("./assets/images/tremory/3.png") },
      { src: require("./assets/images/tremory/4.png") },
      { src: require("./assets/images/tremory/5.png") },
      { src: require("./assets/images/tremory/6.png") },
      { src: require("./assets/images/tremory/7.png") }
    ],
    fresh: [
      { src: require("./assets/images/fresh/1.png") },
      { src: require("./assets/images/fresh/2.png") }
    ],
    hikikomori: [
      { src: require("./assets/images/hikikomori/1.png") },
      { src: require("./assets/images/hikikomori/2.png") },
      { src: require("./assets/images/hikikomori/3.png") },
      { src: require("./assets/images/hikikomori/4.png") },
      { src: require("./assets/images/hikikomori/5.png") }
    ],
    phocus: [{ src: require("./assets/images/phocus/1.jpg") }]
  };

  showMore = id => {
    this.setState(prevState => {
      return { cardID: id, showMore: !prevState.showMore };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return { showMore: !prevState.showMore };
    });
  };

  renderCards = () => {
    const { cards } = this.state;

    let cardsToRender = cards.map(item => {
      const { id, src } = item;

      return (
        <div
          className="hvr-shrink cards"
          id={id + "i"}
          onClick={() => this.showMore(id)}
        >
          <img
            id={id}
            className="icons"
            src={require("./assets/" + src)}
            alt="img"
          />
        </div>
      );
    });

    return cardsToRender;
  };

  renderSliderImgs = () => {
    const { badrums, phocus, tremory, hikikomori, cardID } = this.state;

    let imgs = [];
    if (cardID === "badrums") {
      imgs = badrums;
    } else if (cardID === "hikikomori") {
      imgs = hikikomori;
    } else if (cardID === "tremory") {
      imgs = tremory;
    } else if (cardID === "phocus") {
      imgs = phocus;
    }

    let ImgsToRender = imgs.map((item, i) => {
      return <img className="images" id={i} src={item.src} alt="img" />;
    });

    return ImgsToRender;
  };

  getText = () => {
    const { cardID } = this.state;

    if (cardID === "badrums") {
      return (
        <div>
          <h>Badrumsboden</h>
          <p>
            This project involves building a web application in React from
            scratch; UX, backend and frontend development. The application
            consist of a landingpage, adminpage, webshop and a servicepage.
          </p>
          <br />
          <p>
            My classmate Simon Asp and I built this web application during
            period of 10 months and is my longest project so far.
          </p>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://badrumsboden.herokuapp.com/"
          >
            Link to the application
          </a>
        </div>
      );
    } else if (cardID === "tremory") {
      return (
        <div>
          <h>Tremory</h>
          <p>
            During a four month period I was hired as an consultant for a
            startup called Tremory. During this time we focused on the business
            end of things and the technology infrastructure.
          </p>
          <br />
          <p>
            We relied heavily on the books "Lean Startup" by Eric Ries and
            "Hacking Growth" by Sean Ellis & Morgan Brown. So after the business
            design and our value and growth hypothesis formed, I started to
            implement our first experiment and MVP.
          </p>
          <br />
          <p>
            What I built was the mobile version to complement the web
            application. Our requirements was that the application should be
            secure, scalable and fast. I developed the mobile application with
            React Native and implemented everything in Redux and prepared so
            that it should be easily transferred to implement a web application
            in React later on because as of now that technology stack is
            outdated.
          </p>
          <br />
          <br />
          <p>
            Below are a couple of mixed images of the mockup and the actual
            application.
          </p>
          <br />
        </div>
      );
    } else if (cardID === "cinnober") {
      return (
        <div>
          <h>Cinnober</h>
          <p>
            I worked as an frontend developer for the JPX (Japan Exchange Group)
            trading GUI at Cinnober the summer of 2016. Here I worked with super
            talanted developers that taught me to develop in React. This is also
            where I learned scrum for the first time.
          </p>
        </div>
      );
    } else if (cardID === "phocus") {
      return (
        <div>
          <h>Phocus</h>
          <p>
            In the summer of 2017 I worked with a startup called Phocus. My job
            was to develop a new landing page and then implement and launch the
            site using Wix (because of time restraints).
          </p>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ibb.co/hO05d7"
          >
            Link to full image
          </a>
        </div>
      );
    } else if (cardID === "fresh") {
      return (
        <div>
          <h>Freshcoast</h>
          <p>
            We worked for a company who sells food from a boat during the
            summertime. The service we developed will provide an easier way to
            find customers around them.
          </p>
          <br />
          <p>
            I was responsible for the IT architecture and the UX. The app is
            developed for both Android and iOS using React Native. App is
            available in AppStore.
          </p>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=se.freshcoast.icecreamboats&hl=sv"
          >
            Link to the app store
          </a>
        </div>
      );
    } else if (cardID === "hikikomori") {
      return (
        <div>
          <h>Hikikomori</h>
          <p>
            This was a project we did during the Interactivity in smart
            enviroments course and the Project Management course. The aim of the
            Hikikomori project was to help young people who are outside society
            to develop and improve their social life.
          </p>
          <br />
          <p>
            We worked with certain requirements and goals to create a prototype
            for some one else to implement.
          </p>
        </div>
      );
    }
  };

  render() {
    const { showMore } = this.state;

    return (
      <div id="container">
        <div id="introContainer">
          <p id="hello">HELLO</p>
          <div id="introduction">
            <p id="iam">I'm alfred ödling</p>
            {<img id="line" src={require("./assets/line.png")} alt="img" />}
            <p id="msc">MS.C INTERACTION & DESIGN STUDENT</p>
            <div id="boxContainer">
              <div id="box1" className="box">
                <div id="square1" className="squares" />
                <p>UX</p>
                <p>DESIGN</p>
              </div>
              <div id="box2" className="box">
                <div id="square2" className="squares" />
                <p>SERVICE</p>
                <p>DESIGN</p>
              </div>
              <div id="box3" className="box">
                <div id="square3" className="squares" />
                <p>FULL STACK</p>
                <p>DEVELOPMENT</p>
              </div>
            </div>
          </div>
        </div>

        {showMore ? (
          <div>
            <div id="moreInfo">
              <button onClick={this.showLess}>CLOSE</button>

              <div id="textContainer">{this.getText()}</div>

              <Carousel>{this.renderSliderImgs()}</Carousel>
            </div>
          </div>
        ) : (
          <div id="cardContainer">{this.renderCards()}</div>
        )}

        <div id="footer">
          <p>Contact me: alfred.odling@hotmail.se</p>
          <img
            id="qr"
            src={require("./assets/qr.png")}
            alt="img"
          />
        </div>
      </div>
    );
  }
}
