import React from 'react';
import TodoItem from './TodoItem'
class TodoList extends React.Component{
    constructor(props){
        super(props);
         this.state = {
             list:[],
             inputValue: ''
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
            inputValue: e.target.value
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

	render() {
		return(
            <div >
                <h1 className="header">TodoList组件</h1>
                <div>
                    <input className="inp" value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
                    <button  className="btn" onClick={this.handleButton.bind(this)}>add</button>
                    {/*<button  style={{background:'red',color:'#ffffff'}} onClick={this.handleButton.bind(this)}>add</button>*/}
                </div>
                <ul className="list">
                    {this.state.list.map((item,index) =>{
                        return  <TodoItem
                            //子->父 传递方法给子组件
                            delete={this.handleDeletef.bind(this)}
                            //父->子
                            key={index} content={item} index={index} />
                        //return <li key={index} onClick={this.handleItem.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
	}
}

export default TodoList
