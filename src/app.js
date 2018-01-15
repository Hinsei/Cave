import React   from "react"
import Navbar  from "./component/navbar"

export default class App extends React.Component {
  render(){
    return(
      <div>
        <p id="title">
          Hinsei's Cave
        </p>
        <Navbar />
      </div>
    )
  };
};

