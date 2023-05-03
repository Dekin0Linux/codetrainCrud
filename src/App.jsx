import React,{Component} from 'react'
import UserCard from './components/UserCard'
import AddUser from './components/AddUser'
import Users from './components/Users'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      users:[
        {id:1,name:"Alex Nola",email:"alex@gmail.com",contact:'123456789'},
        
        {id:4,name:"John Doe",email:"john@gmail.com",contact:25},
      ]
    }
  }

  addUser=(user)=>{
    this.setState({
      users: [...this.state.users,user]
    })
  }

  deleteUser=(id)=>{
    const deleted = this.state.users.filter((user,index)=> index != id)
    this.setState({
      users: deleted
    })

  }

  render(){
    return(
      <>
    <div className='row flex-wrap container-fluid'>
      <div className='col-md-3'>
          <AddUser adduser={this.addUser}/>
        </div>
        <div className='col-md-9'>
          <Users usersData={this.state.users} deleteUser={this.deleteUser} />
        </div>
      </div>
      
    </>
    )
  }
}

export default App