import styles from './layout.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Helmet from 'react-helmet'
import Banner from '../../../components/banner/banner.js'

class Layout extends Component {
  render() {
    return <div styleName='container'>
      <Helmet
        title='Layout'
      />

      <Banner
        title='Layout'
      />
    </div>
  }
}

export default CSSModules(Layout, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
