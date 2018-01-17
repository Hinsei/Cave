import React   from 'react'
import Item    from './navbar/item'
import Article from './navbar/article'


export default class Navbar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = 
      {
        selection: "none"
      }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(new_state) {
    this.setState(() => {
      return { selection: new_state }
    })
  }

  render() {
    if(this.state.selection === "none"){
      return(
        <nav>
          <Item text="Articles" handleClick={this.handleClick} />
          <Item text="About" handleClick={this.handleClick} />
        </nav>
      )
    } else {
      return(
        <nav>
          <Item 
            text={this.state.selection} 
            handleClick={this.handleClick} 
            revert={true} 
          />
          { Article(this.state.selection) }
        </nav>
      )
    }
  }
}
