import React, { Component } from 'react'
import * as uuid from 'uuid'

 class EditUser extends Component {

    constructor(props){
        super(props)
        this.state={
            id : props.editInfo.id,
            name: props.editInfo.name,
            email : props.editInfo.email,
            gen : props.editInfo.gen

        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.name == '' && this.state.email == ''&& this.state.gen == ''){
            return
        }

        this.props.editData(this.state.id, this.state)
        // console.log(this.state)

        this.setState({
            id : uuid,
            name:'',
            email:'',
            gen:'',
        })
        this.props.closeModal()
        
        // console.log(this.state)
    }



  render() {
    return (
      <div className='px-4 py-4 '>
        <h3>Edit user info</h3>
        <form action="" onSubmit={this.handleSubmit}>
            <div className='form-group my-3'>
                <label htmlFor="">Name</label>
                <input type="text" className='form-control' name='name' onChange={this.handleChange} value={this.state.name}/>
            </div>
            <div className='form-group my-3'>
                <label htmlFor="">Email</label>
                <input type="text" className='form-control' name='email' onChange={this.handleChange} value={this.state.email}/>
            </div>
            <div className='form-group my-3'>
                <label htmlFor="">Gen</label>
                <input type="number" className='form-control' name='gen' onChange={this.handleChange} value={this.state.gen}/>
            </div>
            <div className='form-group my-3'>
                <input type="submit" className='form-control btn btn-primary' value={'submit'}/>
            </div>
        </form>
      </div>
    )
  }
}

export default EditUser
