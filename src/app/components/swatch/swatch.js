import styles from './swatch.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Swatch extends Component {
  static propTypes = {
    colorName: PropTypes.string.isRequired,
  }

  render() {
    const { colorName } = this.props
    return <div styleName='swatch'>
      <div styleName='color'
        className={`${colorName}`} />

      <div styleName='text'>
        {this.props.colorName}
      </div>
    </div>
  }
}
