import React,{Component} from 'react'
// import UserCard from './components/UserCard'
import AddUser from './components/AddUser'
import Users from './components/Users'
// import EditUser from './components/EditUser'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      users:[
        {id:1,name:"Dekin Faisal",email:"dekin@gmail.com",gen:10},
        {id:2,name:"Alex Nola",email:"alex@gmail.com",gen:4},
        {id:3,name:"Jane larry",email:"jane@gmail.com",gen:30},
        {id:4,name:"Randy Brad",email:"randy@gmail.com",gen:25},
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

  editUser = (id,editdData )=>{
    this.setState({
      users : this.state.users.map((user) => user.id === id ? editdData : user)
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
          <Users usersData={this.state.users} deleteUser={this.deleteUser} editData={this.editUser}/>
        </div>
      </div>
      
    </>
    )
  }
}

export default App