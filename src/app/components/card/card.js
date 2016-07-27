import styles from './card.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

class Card extends Component {
  static propTypes = {
    header: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    header: 'Header',
  }

  render() {
    return <div styleName='card'>
      <div styleName='header'>
        {this.props.header}
      </div>

      <div styleName='content'>
        {this.props.children}
      </div>
    </div>
  }
}

export default CSSModules(Card, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
