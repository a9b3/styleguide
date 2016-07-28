import styles from './section.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Card from '../card/card.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'Title',
  }

  render() {
    return <div styleName='section'>
      <Card header={this.props.title}>
        {this.props.children}
      </Card>
    </div>
  }
}
