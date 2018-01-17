import React from 'react'
import Store from '../../storage'

function rawMarkdown (filename) {
  return { __html: Store(filename) }
}

function Article (filename) {
  return (
    <article >
      <div className="container_md" dangerouslySetInnerHTML={ rawMarkdown(filename) }></div>
    </article>
  )
}

export default Article



