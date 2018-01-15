import React from 'react'

export default class Item extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if(this.props.revert !== true){
      this.props.handleClick(this.props.text)
    } else {
      this.props.handleClick("none")
    }
  }

  render() {
    return(
      <div className="item_container">  
        <p className="text" onClick={ this.handleClick }>
          { this.props.text }
        </p>
      </div>
    )
  }
}
