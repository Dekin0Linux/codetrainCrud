
import React,{useState} from 'react'
import EditUser from './EditUser'
import { deleteUser } from '../store/contactReducer';
import { connect } from 'react-redux';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UserCard({user,deleteUser,index,editData}) {

  const [show,setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
  return (
    <div className='bg-white py-4 px-3 m-3 rounded-3 shadow g-col-6 text-center w-25'>
      {/* moDAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditUser editInfo={user} editData={editData} closeModal={handleClose}/></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>



        <div className='text-secondary bg-info'>
          <img src="https://media.istockphoto.com/id/1296058958/vector/happy-young-woman-watching-into-rounded-frame-isolated-on-white-3d-vector-illustration.jpg?s=612x612&w=0&k=20&c=x9lmmoKVqxRro-G3S48IWIKQiykb2Yv1CkuiizDJ6gw=" alt="" className='img-fluid'/>
        </div>
        <h2>{user.name}</h2>
        <p className='lead'>Email : {user.email}</p>
        <p className='lead'>Contact : {user.contact}</p>
        <div className='mt-3'>
        <Button
          onClick={handleShow}
          variant="primary"
          >Edit</Button>
        <button href={`/${user.id}`} className='mx-3 btn btn-danger' onClick={()=>deleteUser(index)}>Delete</button>
        </div>
        
    </div>
  )
}

const mapDispatch=(dispatch)=>{
  return {
    deleteUser: (id)=>dispatch(deleteUser(id))
  }
}



export default connect(null,mapDispatch)(UserCard)