import './styles/css/app.css'
import React from 'react'
import Cards from './Cards'
import IntroSection from './IntroSection';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <IntroSection/>
        <Cards/>
        <Footer/>
      </div>
    )
  }
}
