import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// eslint-disable-next-line
import { getContent } from './Utils/getContent'

export default class CardContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: {
        images: [],
        text: undefined
      }
    }
  }

  componentWillMount() {
    const { id } = this.props

    this.setState({
      content: getContent(id)
    })
  }

  renderSliderImgs = images => {
    let ImgsToRender = images.map((item, i) => {
      return <img className="images" id={i} src={item.src} alt="img" />
    })

    return ImgsToRender
  }

  render() {
    const { id, toggleContent } = this.props
    const { content } = this.state
    const { images, text } = content

    return (
      <div className="moreInfoContainer">
        <button onClick={() => toggleContent()}>CLOSE</button>
        <div className="moreInfoColumns" id={id}>
          <div className="textContainer">{text}</div>
          <Carousel>{this.renderSliderImgs(images)}</Carousel>
        </div>
      </div>
    )
  }
}
