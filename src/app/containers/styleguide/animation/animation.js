import styles from './animation.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Helmet from 'react-helmet'
import Banner from '../../../components/banner/banner.js'

class Animation extends Component {
  render() {
    return <div styleName='animation'>
      <Helmet title='Animation' />
      <Banner title='Animation' />

      Hello World!
    </div>
  }
}

export default CSSModules(Animation, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
