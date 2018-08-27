import React from 'react'
import '../css/home.css'
import TodoItem from './home/TodoItem'
import { Button } from 'antd';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            inputValue: ''
            /*listArray:[
                {name:'a',
                age:2},
                {name:'b',
                    age:3}
            ]*/
        };
        //this.handleChange=this.handleChange.bind(this)
    }
    handleButton () {
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
    handleChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    /*handleItem(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
            //list
        })
    }*/

    handleDeletef(index){
        console.log(index);
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    clickHandle() {
        this.props.history.push('/list')
    }


    render() {
        const view = this.state.list.map((item,index) =>{
            return<TodoItem
                delete={this.handleDeletef.bind(this)}
                key={index} content={item} index={index} />
        });
        /*const child = this.state.listArray.map((item,index)=> {
            return (
            <div className="item" key={index}>
                <p className="name" style={{textAlign:'center'}}>{item.name}</p>
                <p className="age"  style={{textAlign:'center'}}>{item.age}</p>
            </div>
            )
        });*/
        return(
            <div>
                <h1 className="header">TodoList组件</h1>
                <div>
                    <input className="inp" value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
                    <Button    type="primary" className="btn" onClick={this.handleButton.bind(this)}>add</Button>
                    <Button type="danger" className="btnn" onClick={this.clickHandle.bind(this)}>记录</Button>
                    {/*<button  style={{background:'red',color:'#ffffff'}} onClick={this.handleButton.bind(this)}>add</button>*/}
                </div>
                <ul className="list">
                    {view}
                </ul>
                {/*{child}*/}
            </div>
        )
    }
}

export default Home