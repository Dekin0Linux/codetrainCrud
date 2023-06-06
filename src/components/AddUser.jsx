import React, { Component } from 'react'
import { addContact } from '../store/contactReducer'
import { connect } from 'react-redux'

 class AddUser extends Component {
    constructor(props){
        super(props)
        this.state={
            id:'',
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
            id: this.props.contacts.length+1,
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


const mapDispatchToProps = (dispatch) => {
    return {
        adduser: user => dispatch(addContact(user))
    }
}

const mapState=(state)=>{
    return {
        contacts: state.contact.user
    }
}

export default connect(mapState,mapDispatchToProps) (AddUser)
