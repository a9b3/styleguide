import styles from './banner.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

class Banner extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: 'Banner',
  }

  render() {
    return <div styleName='banner'>
      <h1>
        {this.props.title}
      </h1>
    </div>
  }
}

export default CSSModules(Banner, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
