import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

class App extends React.Component {
  render () {
    return (
      <h1>Hello, { this.props.name }</h1>
    )
  }
}

ReactDom.render(<App name='Jordan' />,
  document.getElementById('app')
)
