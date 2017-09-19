import React from 'react'

import introduction_rendered from 'md/introduction.md'

const Article = props => (
  <article dangerouslySetInnerHTML={{ __html: introduction_rendered }}>
  </article>
)

export default Article
