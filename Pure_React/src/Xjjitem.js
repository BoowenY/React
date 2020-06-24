import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Xjjitem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        console.log("render");
        
        return ( 
        <li onClick={this.handleClick}>{this.props.content}</li>
         );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
// Xjjitem.PropTypes = {
//     content:PropTypes.string,
//     index:PropTypes.number,
//     deleteItem:PropTypes.func
// }
export default Xjjitem;