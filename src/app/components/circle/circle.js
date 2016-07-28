import styles from './circle.scss'
import CSSModules from 'react-css-modules'
import React, { PropTypes } from 'react'

const Circle = ({
  size,
  style,
  ...otherProps,
}) => {
  const mergedStyle = Object.assign({}, {
    width: size,
    height: size,
    backgroundColor: 'black',
  }, style || {})

  if (otherProps.className) {
    delete mergedStyle.backgroundColor
  }

  return <div styleName='circle'
    style={mergedStyle}
    {...otherProps}
  />
}

Circle.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
}

Circle.defaultProps = {
  size: '5em',
}

export default CSSModules(Circle, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
