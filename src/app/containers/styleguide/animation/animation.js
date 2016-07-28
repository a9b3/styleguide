import styles from './animation.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Page from '../../../components/page/page.js'
import Section from '../../../components/section/section.js'
import Circle from '../../../components/circle/circle.js'
import CodeSnippet from '../../../components/code-snippet/code-snippet.js'
import PlayAnim from './play-anim/play-anim.js'

const keyFrameExample = `
.foo {
  animation: foo 1s linear;
}
`

const animations = () => {
  const animationNames = [
    'fadeIn',
    'slideDown',
  ]

  return animationNames.map((name, i) => {
    return <div styleName='section' key={i}>
      <div styleName='name'>
        {name}
      </div>

      <div styleName='circle'>
        <PlayAnim animation={name}>
          <Circle className={`peach`} />
        </PlayAnim>
      </div>
    </div>
  })
}

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Animation extends Component {
  render() {
    return <Page title='Animations'>
      <div>
        <Section title='Animations'>
          <p>
            This is a list of keyframe animations.
          </p>

          <CodeSnippet type='css'>
            {keyFrameExample}
          </CodeSnippet>

          {animations()}
        </Section>
      </div>
    </Page>
  }
}
