import React from 'react'
import Markdown from 'react-markdown'

export default class Article extends React.Component {
  render(){
    return(
      <article>
        <Markdown />
      </article>
    )
  }
}
