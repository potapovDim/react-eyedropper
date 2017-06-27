import React, { Component, PropTypes } from 'react'
import html2canvas from 'html2canvas'
import getCanvasPixelColor from 'get-canvas-pixel-color'

class EyeDropper extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    initializedColor: PropTypes.func.isRequired,
    onInit: PropTypes.func
  }
  eyeDropper = (e) => {
    const {initializedColor} = this.props
    const removeEventListener = () => {
       document.removeEventListener('click', this.eyeDropper)
    }
    html2canvas(e.toElement, {
      onrendered: function (canvas) {
        const x = e.offsetX==undefined ? e.layerX: e.offsetX
        const y = e.offsetY==undefined ? e.layerY: e.offsetY
        const { r, g, b, a } = getCanvasPixelColor(canvas, x, y)
        a === 0
          ? initializedColor({ r:255, g: 255, b: 255 })
          : initializedColor({ r, g: b, b: g })
        removeEventListener()
      }
    })
    document.body.style.cursor = 'default'
  }
  initEyeDropper = (event) => {
    this.props.onInit && this.props.onInit()
    document.body.style.cursor = 'cell'
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
