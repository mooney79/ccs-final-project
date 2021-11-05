import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie'
// import DeleteDetails from './DeleteDetails';

function DeleteWellModal(props) {
    const handleClose = () => props.setShowWellDel(false);
    const urlId=props.history.location.pathname.slice(10);
    const urlPicker=`/api/wells/${urlId}`;


    const handleDelete = async () => {
       
        const options = {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
        };
        const response = await fetch(urlPicker, options);
        if(!response){
            console.log(response);
        } else {
            props.setRefresh(Math.random())
            props.history.push('');
        }
    }
  
    return (
      <>  
        <Modal show={props.showWellDel} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Well</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this Well? This action cannot be undone.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Keep Well
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default DeleteWellModal;