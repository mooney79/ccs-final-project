import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie'

function NewWellModal(props) {
       
    const handleClose = () => props.setShowNew(false);

    const handleSave = async () => {
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newWell)
        };
        const response = await fetch('/api/wells/', options);
        if(!response){
            console.log(response);
        } else {
            const data = await response.json();
            props.setShowNew(false);
            console.log(data);
            props.setWell(data);
            props.history.push(`/wellinfo/${data.id}`);
        }
    }

    const [newWell, setNewWell] = useState({
        lease: '',
        well_number: '',
        API_number: '',
        total_depth: 0,
    })

    function handleInput(event) {
        const {name, value} = event.target;
        setNewWell(prevState => ({  
            ...prevState,        
            [name]:value,
        }))
    }
   
    return (
      <>  
        <Modal show={props.showNew} onHide={handleClose} className="new-well-modal">
          <Modal.Header className="new-modal" closeButton>
            <Modal.Title>Add New Well</Modal.Title>
          </Modal.Header>
          <Modal.Body className="new-modal">
            <div className="form-container new-well">
            <form className="col-12 new-well-form" >
                <div className="form-group text-left mb-3">
                    <label htmlFor='lease'>Lease Name:</label>
                    <input type="text" 
                        className="form-control"
                        id="lease"
                        placeholder="Enter lease"
                        onChange={handleInput}
                        required
                        name='lease'
                        value={newWell.lease}
                    />
                </div>
                <div className="form-group text-left mb-3">
                    <label htmlFor='well_number'>Well Number: </label>
                    <input type="text" 
                        className="form-control"
                        id="well_number"
                        placeholder="Enter well number"
                        onChange={handleInput}
                        required
                        name='well_number'
                        value={newWell.well_number}
                    />
                </div>
                <div className="form-group text-left mb-3">
                    <label htmlFor='API_number'>API Number:</label>
                    <input type="text" 
                        className="form-control"
                        id="API_number"
                        placeholder="Enter API number"
                        onChange={handleInput}
                        required
                        name='API_number'
                        value={newWell.API_number}
                    />
                </div>
                <div className="form-group text-left mb-3">
                    <label htmlFor='total_depth'>Total Depth:</label>
                    <input type="number" 
                        className="form-control"
                        id="total_depth"
                        placeholder="Enter total depth"
                        onChange={handleInput}
                        required
                        name='total_depth'
                        value={newWell.total_depth}
                    />
                </div>
            </form>
            </div>
          </Modal.Body>
          <Modal.Footer className="new-modal">
            <Button variant="secondary" onClick={handleClose}>
              Discard
            </Button>
            <Button variant="warning" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default NewWellModal;