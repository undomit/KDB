import React from 'react'
import ReactDom from 'react-dom'
import List from './list.js'
import './css/bootstrap/dist/css/bootstrap.css'

class Button extends React.Component {
  render() {
    return (
      <button type = "button"
              className = {this.props.class}
              onClick = {this.props.clickMe}
      >
        {this.props.value}
      </button>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    let valueList = ["Categories", "Carriers", "Issue List", "Browse Know-How", "User Management"];
    let classList = ["list-group-item list-group-item-action", "list-group-item list-group-item-action",
     "list-group-item list-group-item-action", "list-group-item list-group-item-action",
      "list-group-item list-group-item-action", "list-group-item list-group-item-action"];
    this.state = {
      values: valueList,
      classes: classList,
    }
  }

  handleClick(i) {
    let classList = ["list-group-item list-group-item-action", "list-group-item list-group-item-action",
     "list-group-item list-group-item-action", "list-group-item list-group-item-action",
      "list-group-item list-group-item-action", "list-group-item list-group-item-action"];
    classList[i] = "list-group-item list-group-item-action active";
    this.setState({
      classes: classList,
    })
    ReactDom.render(
      <List />,
      document.getElementById("content")
    )

  }

  renderButtons(valueList, classList) {
    let elements = [];
    for (let i = 0; i < valueList.length; i++) {
      elements.push(<Button key = {i}
                            value = {valueList[i]}
                            class = {classList[i]}
                            clickMe = {this.handleClick.bind(this, i)}
                    />)
    }
    return elements
  }

  render() {
    return (
      this.renderButtons(this.state.values, this.state.classes)
    );
  }
}

export default Menu;
