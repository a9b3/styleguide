import styles from './sidebar.scss'
import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Sidebar extends Component {
  renderItems(max) {
    const elems = []
    for (let i = 0; i < max; i++) {
      elems.push(
        <div styleName='item'>
          Item {i}
        </div>
      )
    }
    return elems
  }

  render() {
    return <div styleName='sidebar'>
      <div styleName='header item'>
        <div>
        <h4 className='semi-bold'>Style</h4>
        <h4>Guide</h4>
        </div>
      </div>

      <div styleName='body'>
        <div styleName='body-inner'>
          <Link styleName='list-item'
            to='/styleguide/general'
            activeClassName={`${styles['list-item-active']}`}>
            General
          </Link>

          <Link styleName='list-item'
            to='/styleguide/layout'
            activeClassName={`${styles['list-item-active']}`}>
            Layout
          </Link>

          <Link styleName='list-item'
            to='/styleguide/animation'
            activeClassName={`${styles['list-item-active']}`}>
            Animation
          </Link>
        </div>
      </div>

      <div styleName='end footer'>
        <div styleName='item'>
          <div>
            <div>
              Sam Lau
            </div>
            <a href='https://github.com/esayemm'>@esayemm</a>
          </div>
        </div>
      </div>
    </div>
  }
}
