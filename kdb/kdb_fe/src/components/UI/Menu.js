import React from 'react'
import {Link} from "react-router-dom";
import './css/bootstrap/dist/css/bootstrap.css'

class Button extends React.Component {
  render() {
    return (
      <Link to = {this.props.link}>
        <button type = "button"
                className = {this.props.class}
                onClick = {this.props.clickMe}
        >
          {this.props.value}
        </button>
      </Link>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    let valueList = ["Categories", "Carriers", "IssueList", "Browse", "Users"];
    let linkList = ["/categories/list", "/carriers/list", "/issues/list", "/browse/list", "/users/list"];
    let classList = ["list-group-item list-group-item-action", "list-group-item list-group-item-action",
     "list-group-item list-group-item-action", "list-group-item list-group-item-action",
      "list-group-item list-group-item-action", "list-group-item list-group-item-action"];
    this.state = {
      values: valueList,
      classes: classList,
      links: linkList,
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

  }

  renderButtons(valueList, classList, linkList) {
    let elements = [];
    for (let i = 0; i < valueList.length; i++) {
      elements.push(<Button key = {i}
                            value = {valueList[i]}
                            class = {classList[i]}
                            link = {this.state.links[i]}
                            clickMe = {this.handleClick.bind(this, i)}
                    />)
    }
    return elements
  }

  render() {
    return (
      this.renderButtons(this.state.values, this.state.classes, this.state.links)
    );
  }
}

export default Menu;
