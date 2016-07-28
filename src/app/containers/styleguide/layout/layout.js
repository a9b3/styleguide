import styles from './layout.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Page from '../../../components/page/page.js'
import Section from '../../../components/section/section.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Layout extends Component {
  render() {
    return <Page title='Layout'>
      <div>
        <Section title='Layout'>
          Layout
        </Section>
      </div>
    </Page>
  }
}
