import React from 'react'

function UserCard({user,deleteUser,index}) {

    
  return (
    <div className='bg-white py-4 px-3 m-3 rounded-3 shadow g-col-6 text-center w-25'>
        <div className='text-secondary bg-info'>
          <img src="https://media.istockphoto.com/id/1296058958/vector/happy-young-woman-watching-into-rounded-frame-isolated-on-white-3d-vector-illustration.jpg?s=612x612&w=0&k=20&c=x9lmmoKVqxRro-G3S48IWIKQiykb2Yv1CkuiizDJ6gw=" alt="" className='img-fluid'/>
        </div>
        <h2>{user.name}</h2>
        <p className='lead'>Email : {user.email}</p>
        <p className='lead'>Contact : {user.contact}</p>
        <div className='mt-3'>
        <a href={`/${user.id}`} className='btn btn-info'>Edit</a>
        <button href={`/${user.id}`} className='mx-3 btn btn-danger' onClick={()=>deleteUser(index)}>Delete</button>
        </div>
        
    </div>
  )
}

export default UserCard