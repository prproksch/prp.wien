import React from 'react'
import Typed from 'typed.js'

const words = ["Hi, I'm Philipp!"]
class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 100,
      backSpeed: 0,
      loop: false,
      cursorChar: '|',
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <span
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el
          }}
        />
      </>
    )
  }
}
export default Typing
