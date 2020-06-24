import React, { Component, Fragment } from "react";
import axios from 'axios'
import Xjjitem from './Xjjitem'
class Xjj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油分类", "fuck U"],
    };
  }
  componentDidMount(){
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
}
  render() {
    console.log("Doing");
    
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
            
            <div>
              <Xjjitem 
              key={index + item}
              content={item}
              index={index}
              deleteItem={this.deleteItem.bind(this)}/>
            </div>
            
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
