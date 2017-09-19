import React from 'react'

import references_rendered from 'md/references.md'

const Article = props => (
  <article>
    <h1>References</h1>
    <section dangerouslySetInnerHTML={{ __html: references_rendered }} />
  </article>
)

export default Article
