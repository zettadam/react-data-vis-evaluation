import React from 'react'

import {
  Introduction
} from './content'

const ContentSection = ({
  match,
  section
}) => {
  let output
  switch (section) {
    case 'introduction':
      output = <Introduction />
      break
    default:
      output = <Introduction />
  }

  return (
    <section className="content-article">
      { output }
    </section>
  )
}

export default ContentSection
