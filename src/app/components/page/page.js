import styles from './page.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Helmet from 'react-helmet'
import Banner from '../banner/banner.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Page extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    title: 'Title',
  }

  render() {
    return <div styleName='page'>
      <Helmet title={this.props.title} />
      <Banner title={this.props.title} />

      <div styleName='content'>
        {this.props.children}
      </div>
    </div>
  }
}
