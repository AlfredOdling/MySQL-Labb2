import React from 'react'
import CardContent from "./CardContent"

export default class Card extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showContent: false,
      expanded: false
    }
  }

  toggleContent = () => {
    this.setState(prevState => {
      return {
        showContent: !prevState.showContent,
        expanded: !prevState.expanded
      }
    })
  }

  render() {
    const { id, src } = this.props
    const { showContent, expanded } = this.state

    return (
      <div
        className="hvr-shrink cards"
        id={id + 'j'}
      >
        { showContent ?
            <CardContent toggleContent={this.toggleContent} id={id} />
          :
          <img
            onClick={() => this.toggleContent()}
            id={id}
            className="icons"
            src={require('./assets/' + src)}
            alt="img" /> }
      </div>
    )
  }
}