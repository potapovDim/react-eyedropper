import React, { Component, PropTypes } from 'react'
import html2canvas from 'html2canvas'
import getCanvasPixelColor from 'get-canvas-pixel-color'

class EyeDropper extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    initializedColor: PropTypes.func.isRequired
  }
  eyeDropper = (e) => {
    const {initializedColor} = this.props
    html2canvas(e.toElement, {
      onrendered: function (canvas) {
        console.log(e.offsetX,e.offsetY )
        const x = e.offsetX==undefined ? e.layerX: e.offsetX
        const y = e.offsetY==undefined ? e.layerY: e.offsetY
        console.log(canvas.width, canvas.height)
        const { r, g, b } = getCanvasPixelColor(canvas, x, y)
        initializedColor({ r, g: b, b: g })
      }
    })
    document.body.style.cursor = 'default'
    document.removeEventListener('click', this.eyeDropper)
  }
  initEyeDropper = () => {
      document.body.style.cursor = 'pointer'
      document.addEventListener('click', this.eyeDropper)
  }
  render() {
    const {className, title } = this.props
    const classNameComponent = className ? className : "eye dropper"
    const titleComponent = title ? title : '+' 
    return (
      <div className={classNameComponent} onClick={this.initEyeDropper}>{titleComponent}</div>
    )
  }
}

export default EyeDropper