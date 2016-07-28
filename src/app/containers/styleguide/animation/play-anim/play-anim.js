import styles from './play-anim.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class PlayAnim extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    animation: PropTypes.string.isRequired,
    time: PropTypes.string,
    curve: PropTypes.string,
  }

  static defaultProps = {
    time: '1s',
    curve: 'linear',
  }

  state = {
    style: {},
  }

  _onClick = () => {
    this.setState({ style: {} })

    setTimeout(() => {
      this.setState({
        style: {
          animation: `${this.props.animation} ${this.props.time} ${this.props.curve}`,
        },
      })
    }, 0)
  }

  render() {
    return <div
      styleName='wrapper'
      onClick={this._onClick}
      style={this.state.style}
    >

      {this.props.children}
    </div>
  }
}
