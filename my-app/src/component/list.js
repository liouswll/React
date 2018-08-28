import React from 'react'
import { Button , Input} from 'antd';
import '../css/list.css'
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            defaultIndex:0,
            list:['经典留言','近期留言','动感地带','二次元空间']
        }
    }
    selectTab(index){
        this.setState({
            defaultIndex:index
        })
    }
    render(){
        const Search = Input.Search;
        const btn =this.state.list.map((item,index)=>{
            return  <div className={this.state.defaultIndex === index ? 'btn_item_active' : 'btn_item'} key={index} onClick={() => { this.selectTab(index) }}>{item}</div>
        })
        return (
            <div className="home-content">
                <div className="home-content-header">
                    <div className="bdc">
                        {btn}
                    </div>
                    <div className='home-input'>
                        <Search
                            placeholder="input search text"
                            enterButton
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default List
