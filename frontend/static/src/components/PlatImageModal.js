import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Cookies from 'js-cookie'
// import DeleteDetails from './DeleteDetails';

function PlatImageModal(props) {
  const handleClose = () => props.setShowImage(false);

  const [preview, setPreview] = useState('');

  const handleImage = (event) => {
    const file = event.target.files[0];
    props.setWell({
      ...props.well,
      plat_image: file,
    })
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    }
    reader.readAsDataURL(file); //returns URL
  }

    // const urlId=props.history.location.pathname.slice(10);
    // const urlPicker=`/api/wells/${urlId}`;


    // const handleDelete = async () => {
       
    //     const options = {
    //         method: 'DELETE',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'X-CSRFToken': Cookies.get('csrftoken'),
    //         },
    //     };
    //     const response = await fetch(urlPicker, options);
    //     if(!response){
    //         console.log(response);
    //     } else {
    //         props.history.push('');
    //     }
    // }

    function handleUpload(){
      const formData = new FormData(); //Constructing key value pairs below VVV
      formData.append('plat_image', props.well.plat_image);

      const options = {
        method: 'PATCH',
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken'), 
        },
        body: formData,
        // body: JSON.stringify({[propertyName]: value})
      }
      fetch(`/api/wells/${props.well.id}/`, options); 
      // fetch(`/media/`, options); 
    }

    let imageHTML;
    if(props.well){      
      imageHTML=
      <div className="ImageForm">
        {/* if (props.well.plat_image) {
          <img src={props.well.plat_image} alt="plat_image" />
        } else {*/}
        {props.well.plat_image && <img className="prev" src={props.well.plat_image} alt ="" />}
        <input type="file" name="plat_image" onChange={handleImage}/>
      </div>
    } else {
      imageHTML=<></>
    }
  
    return (
      <>  
        <Modal show={props.showImage} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Plat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {imageHTML}
          </Modal.Body>
          <Modal.Footer>           
            <Button variant="primary" onClick={handleUpload}>
              Upload Photo
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default PlatImageModal;

/*

<Button variant="secondary" onClick={handleClose}>
  Keep Well
</Button>




  
  const handleUpload = (event) => {
    // event.preventDefault();
    const formData = new FormData(); //Constructing key value pairs below VVV
    formData.append('plat_image', well.plat_image);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'), 
      },
      body: formData,
      // body: JSON.stringify({[propertyName]: value})
    }
    // fetch(`/api/wells/${props.well.id}/`, options); 
    fetch(`/media/`, options); 
  }

  return (
    <div className="ImageForm">
        <input type="file" name="plat_image" onChange={handleImage}/>
        {props.well.plat_image && <img src={preview} alt ="" />}
    </div>
  );
}


const fetchWell = async () => {
      const response = await fetch(`/api/wells/${props.well.id}/`, 
      {headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
              }
      });
      if (!response.ok) {
          console.log('Error fetching well');
      } else {
          const data = await response.json();
          props.setWell(data);
          history.push(`/wellinfo/${id}`);
      }
    }





*/