import React from 'react'

function UserCard({user,deleteUser,index}) {

    
  return (
    <div className='bg-white py-4 px-3 m-3 rounded-3 shadow g-col-6 '>
        <h3 className='text-secondary'>Codetrain User</h3>
        <hr />
        <h2>{user.name}</h2>
        <h4>Email : {user.email}</h4>
        <h4>Gen : {user.gen}</h4>
        <div className='mt-3'>
        <a href={`/${user.id}`} className='btn btn-info'>Edit</a>
        <button href={`/${user.id}`} className='mx-3 btn btn-danger' onClick={()=>deleteUser(index)}>Delete</button>
        </div>
        
    </div>
  )
}

export default UserCard