import React from 'react'
import Card from "./Card";

export default class Cards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [{ 
          id: 'badrumsboden',
          src: 'badrums.png' 
        },
        {
          id: 'tremory',
          src: 'tremory.png'
        },
        {
          id: 'cinnober',
          src: 'cinnober.png'
        },
        {
          id: 'phocus',
          src: 'phocus.png'
        },
        {
          id: 'freshcoast',
          src: 'fresh.png'
        },
        {
          id: 'hikikomori',
          src: 'hikikomori.png'
        }],
    }
  }

  renderCards = () => {
    const { cards } = this.state

    let cardsToRender = cards.map(item => {
      const { id, src } = item
      
      return <Card id={id} src={src}/>
    })

    return cardsToRender
  }

  render() {
    

    return (
      <div id="cardContainer">
        {this.renderCards()}
      </div>
    )
  }
}
