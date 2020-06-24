import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
        console.log(this.state);
        
    }
    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}>
                    <Input placeholder='this.state.inputValue' style={{ width:'250px',marginRight:'10px'}}/>
                    <Button type="primary">ADD</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List bordered
                    dataSource={this.state.list}
        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
         );
    }
}
export default TodoList;