
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { saveTodo, ADD_TODO } from '../state/actions/todoAction'
import Form from 'react-jsonschema-form'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor ",this.props)
        this.handleSubmit = this.handleSubmit.bind(this)
        
        
    }
    componentDidUpdate(prevprops){
        console.log("component update",prevprops, this.props)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(e.currentTarget)
    }
    onSubmit (e){
        console.log(e.formData)
        this.props.saveTodo(e.formData)
    }

    renderList(){
        console.log(this.props)
        if(this.props.list){
            console.log(this.props.list)
            return(
                this.props.list.map((item,index) => <li key={index} > {item.task}</li>)
            )
        }
    }

    render() {
        console.log(this.props.list)
        return (<div>
           <Form schema= {this.props.schema} formData={this.props.formData} onSubmit={(e) => this.onSubmit(e)}  />
           <div>
               {this.renderList()} 
        {/* {this.props.list.map(item => <li key={item} > {item.task}</li>)} */}
{/* 
        {
            JSON.stringify(this.props.list)
        } */}
      </div>
        </div>

       


        )


    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        schema : state.loginState.schema,
        list: [...state.saveTodoState.list]
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ saveTodo }, dispatch)
}

const hoc = connect(mapStateToProps, mapDispatchToProps)(Todo)

export { hoc as default }

