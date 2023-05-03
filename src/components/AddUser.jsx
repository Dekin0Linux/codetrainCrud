import React, { Component } from 'react'

 class AddUser extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email : '',
            contact : ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.name == ''&&this.state.email == ''&& this.state.contact == ''){
            return
        }

        this.props.adduser(this.state)

        this.setState({
            name:'',
            email:'',
            contact:'',
        })
        
        // console.log(this.state)
    }



  render() {
    return (
      <div className='px-4 py-4 '>
        <h3>Add user info</h3>
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
                <label htmlFor="">Contact</label>
                <input type="text" className='form-control' name='contact' onChange={this.handleChange} value={this.state.contact}/>
            </div>
            <div className='form-group my-3'>
                <input type="submit" className='form-control btn btn-primary' value={'submit'}/>
            </div>
        </form>
      </div>
    )
  }
}

export default AddUser
