import React, { Component } from 'react'

export default class NotFound extends Component {
  componentDidMount() {
    document.title = 'Not Found'
  }
  render() {
    return (
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 50 }}>
        <span>NOT FOUND 404!</span>
      </div>
    )
  }
}
