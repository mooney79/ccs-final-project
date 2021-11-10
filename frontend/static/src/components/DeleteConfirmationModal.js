import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie'
import DeleteDetails from './DeleteDetails';

function DeleteConfirmationModal(props) {
    const [deleteDetails, setDeleteDetails] = useState({});
    const handleClose = () => props.setShowDelete(false);
    const {id, element} = props.deleteTarget;
    let delHTML='';
    let urlPicker='';

    const handleDelete = async () => {
       
        const options = {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
        };
        console.log(urlPicker);
        const response = await fetch(urlPicker, options);
        if(!response){
            console.log(response);
        } else {
            // const data = await response.json();
            // console.log(data);
            // props.setShowDelete(false);
            handleClose();
            props.setDeleteTarget({});
            props.setIsClicked(false);
            props.setRefresh(Math.random());
            
            // handleClose();
            // props.history.push(props.history.location.pathname);
            // props.history.push(`/wellinfo/${data.id}`);
        }
    }

    useEffect(() => {
        const fetchDeleteDetails = async () => {
            const response = await fetch(urlPicker, 
            {headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken'),
                    }
            });
            if (!response.ok) {
                console.log('Error fetching well feature');
            } else {
                const data = await response.json();
                setDeleteDetails(data);
            }
        }
        fetchDeleteDetails();        
    }, [props.showDelete]); //urlPicker

    // console.log(props);
    if (props.showDelete === true) {
    
    switch(element) {
        case 'hole':
            urlPicker = `/api/wells/holes/${id}/`;
            break;
        case 'casing':
            urlPicker = `/api/wells/casings/${id}/`;
            break;
        case 'cement':
            urlPicker = `/api/wells/cements/${id}/`;
            break;
        case 'perfs':
            urlPicker = `/api/wells/perforations/${id}/`;
            break;
        case 'plug':
            urlPicker = `/api/wells/plugs/${id}/`;
            break;
        default:
            console.log('Error: no urlPicker defined for delete feature');
    }
    // console.log(element, id);
    // console.log(urlPicker);
    // useEffect(() => {
    //     const fetchDeleteDetails = async () => {
    //         const response = await fetch(urlPicker, 
    //         {headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-CSRFToken': Cookies.get('csrftoken'),
    //                 }
    //         });
    //         if (!response.ok) {
    //             console.log('Error fetching well feature');
    //         } else {
    //             const data = await response.json();
    //             setDeleteDetails(data);
    //             // console.log(data);
    //             // if (data !== {}) {
    //                 // for (const [key, value] of Object.entries(data)){
    //                 //     delHTML += `<p>${key}: ${value}</p>`;
    //                     // delHTML += `<p><span className="bold-span">${key}: ${value}</span></p> <br />`;
    //                 // }
    //             // }
    //         }
    //     }
    //     fetchDeleteDetails();
        
        
    // }, [/*props.deleteTarget*/]);

    
    
    // console.log(deleteDetails);
    // if (deleteDetails !== {}) {
    //     for (const [key, value] of Object.entries(deleteDetails)){
    //         delHTML = <><p><span className="bold-span">{key}:</span> {value} </p><br/></>
    //     }
    // }
    if (deleteDetails !== {}) {
        const detailPairs = Object.entries(deleteDetails);
        console.log(detailPairs);
        delHTML = detailPairs.map(pair => <DeleteDetails key={Math.random()*450} {...pair} />);
    }
    }
  
    return (
      <>  
        <Modal show={props.showDelete} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this entry? This action cannot be undone.</p>
            <br />
            <div>
                {delHTML}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Keep Data
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default DeleteConfirmationModal;

/*
TO DO:
------
Figure out where to put this, and what props are needed.
Rewrite this to pop up when a delete button is pressed.
Rewrite the fetch to delete the entry.
Can I figure out how to call it without cloning 5 times for each feature?
Write the detai views/urls needed for the fetch.
*/