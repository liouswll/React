import React from 'react'

class TodoItem extends React.Component{

    handleDelete(){
        //子组件向父组件通信，子组件调用父组件传过来的方法

        //优化方法  const { delete, index } = this.props
        //          delete(index)
        this.props.delete(this.props.index)

        //父组件通过属性像子组件传递参数 子组件通过props接受父组件传递过来的参数
        //console.log(this.props.index)
    }

    render(){
        //优化方法
        //const { content } = this.props;
        return (
            <div className="listi" onClick={this.handleDelete.bind(this)}>  {this.props.content}
                {/*{content}*/}
            </div>
        )
    }
}

export default  TodoItem
