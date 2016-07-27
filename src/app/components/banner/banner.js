import styles from './banner.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Banner extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: 'Banner',
  }

  render() {
    const {
      title,
      ...otherProps,
    } = this.props

    return <div styleName='banner'
      {...otherProps}
    >
      <h1>
        {title}
      </h1>
    </div>
  }
}
