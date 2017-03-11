import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import getCanvasPixelColor from 'get-canvas-pixel-color'

class EyeDropper extends Component {
  state = {
    clicked: false
  }
  eyeDropper = (e) => {
    const {setColor} = this.props
    console.log('!!!!!!!!!!!!!!----')
    html2canvas(e.toElement, {
      onrendered: function (canvas) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width = canvas.width;
        this.canvas.height = this.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.drawImage(canvas, 0, 0, this.width, this.height);
        this.data = this.ctx.getImageData(0, 0, this.width, this.height).data;
        let { r, g, b } = getCanvasPixelColor(canvas, this.width / 2, this.height / 2);
        setColor({ r, g: b, b: g })
        console.log(this.data, r, g, b)
      }
    })
  }
  clicker = (e) => {
    this.setState({ clicked: !this.state.clicked })
    console.log('!!!!!!!!')
    if (this.state.clicked) {
      document.body.style.cursor = 'pointer'
      document.addEventListener('click', this.eyeDropper)
    }
    else {
      document.body.style.cursor = 'default'
      document.removeEventListener('click', this.eyeDropper)
    }
  }
  render() {
    return (
      <div className="eye dropper" onClick={this.clicker}>+</div>
    )
  }
}

export default EyeDropper