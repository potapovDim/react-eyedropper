# react-eyedropper



## Usage

```js
import React, { Component } from 'react'
import EyeDropper from 'react-eyedropper'

class App extends Component {
  state = {
    r: 255,
    g: 255,
    b: 255
  }
  setColor = ({ r, g, b }) => {
    this.setState({ r, g, b })
  }
  render() {
    const {r, g, b} = this.state
    return (
      <div>
        <div className="main">
          <div className="container first">rgb(106, 0, 0)</div>
          <div className="container second">rgb(106, 124, 0)</div>
          <div className="container third">rgb(106, 124, 138)</div>
          <div className="container fourth">rgb(15, 124, 138)</div>
          <div className="container fifth">rgb(15, 44, 138)</div>
          <div className="container sixth">rgb(219, 238, 97)</div>
          <div className="container seventch">gradient</div>
        </div>
          <div className="result">
            <div className="container " style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>rgb({r}, {g}, {b})</div>
          </div>
        <div className="eye-drop-container">
          <EyeDropper initializedColor={this.setColor}/>
        </div>
        <div id="container">
		      <img src="./test.jpg" id="sample"/>
	      </div>
      </div>
    )
  }
}


```


```sh
npm install --save react-eyedropper
```
## API

### `<EyeDropper initializedColor={this.setColor}/>`

props | description
--- | ---
**`initializedColor`** | Type: `function` , *required* <br> callback, arg  is object  {r,g,b}
**`className`** | Type: `string`, <br> for style
**`title`** | Type: `string`, <br> title 



## Dependencies

https://github.com/bfred-it/get-canvas-pixel-color/
https://github.com/niklasvh/html2canvas

## License

