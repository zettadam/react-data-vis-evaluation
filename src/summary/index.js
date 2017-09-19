import React from 'react'
import summary_rendered from 'md/summary.md'

const Article = props => (
  <article>
    <h1>Summary</h1>
    <section dangerouslySetInnerHTML={{ __html: summary_rendered }} />
  </article>
)

export default Article
