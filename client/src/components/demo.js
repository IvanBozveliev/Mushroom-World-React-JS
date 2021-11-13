import { Component } from "react";

class Demo extends Component {
  constructor(props){
      super(props)

      this.state = {
          display: 'none'
      }
  }
  
  onMouseOver(e){
      this.setState({display: 'block'})
  }

  onMouseOut(e){
      this.setState({
          display: 'none'
      })
  }

  render(){
      return(
        <li
          onMouseEnter={this.onMouseOver.bind(this)}
          onMouseLeave={this.onMouseOut.bind(this)}
        >
            {this.props.todo} {this.props.display}
        </li>
      )
  }
}

export default Demo;