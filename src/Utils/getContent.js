import React from 'react'

export const getContent = id => {

  let badrumsboden = {
    images: [
      { src: require('../assets/images/badrumsboden/1.png') },
      { src: require('../assets/images/badrumsboden/2.png') },
      { src: require('../assets/images/badrumsboden/3.png') }
    ],
    text: (
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
    )
  }

  let tremory = {
    images: [
      { src: require('../assets/images/tremory/1.png') },
      { src: require('../assets/images/tremory/2.png') },
      { src: require('../assets/images/tremory/3.png') },
      { src: require('../assets/images/tremory/4.png') },
      { src: require('../assets/images/tremory/5.png') },
      { src: require('../assets/images/tremory/6.png') },
      { src: require('../assets/images/tremory/7.png') }
    ],
    text: (
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
      </div>
    )
  }

  let cinnober = {
    images: [],
    text: (
      <div>
        <h>Cinnober</h>
        <p>
          I worked as an frontend developer for the JPX (Japan Exchange Group)
          trading GUI at Cinnober the summer of 2016. Here I worked with super
          talanted developers that taught me to develop in React. This is also
          where I learned scrum for the first time.
         </p>
      </div>
    )
  }

  let freshcoast = {
    images: [
      { src: require('../assets/images/fresh/1.png') },
      { src: require('../assets/images/fresh/2.png') }
    ],
    text: (
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
    )
  }

  let hikikomori = {
    images: [
      { src: require('../assets/images/hikikomori/1.png') },
      { src: require('../assets/images/hikikomori/2.png') },
      { src: require('../assets/images/hikikomori/3.png') },
      { src: require('../assets/images/hikikomori/4.png') },
      { src: require('../assets/images/hikikomori/5.png') }
    ],
    text: (
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
    )
  }

  let phocus = {
    images: [
        { src: require('../assets/images/phocus/1.jpg') }
      ],
    text: (
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
    )
  }

  let content = {
    badrumsboden,
    tremory,
    cinnober,
    freshcoast,
    hikikomori,
    phocus
  }

  return content[id]
}