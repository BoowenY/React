import React, { Component, Fragment } from "react";
class Xjj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油分类", "fuck U"],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}>Service</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
            <li key={index + item}
            onClick={this.deleteItem.bind(this,index)}>
                {item}
                </li>
            )
          })}
        </ul>
      </Fragment>
    );
  }
  inputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
    });
  }
  deleteItem(index){
      let list = this.state.list
      list.splice(index,1)
      this.setState({
          list:list
      })
  }
}
export default Xjj;
