import React, {Component} from 'react'

class Comment extends Component {
  render () {
    return (
      <li>
        <h3>{ this.props.title }</h3>
        <small>commented by: { this.props.user }</small>
      </li>
    )
  }
}
export default Comment
