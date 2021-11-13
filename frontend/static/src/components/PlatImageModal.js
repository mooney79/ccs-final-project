import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'; //useState, useEffect
import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom';
// import { useEffect } from 'react';
// import DeleteDetails from './DeleteDetails';

function PlatImageModal(props) {
  const handleClose = () => props.setShowImage(false);
  // const [imageHTML, setImageHTML] = useState('');
  const [preview, setPreview] = useState('');
  let imageHTML;

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

  // const [source, setSource] = useState('');

  // useEffect(() => {    
  //   // if (!props.well){
  //   //   const fetchWell = async () => {
  //   //     const response = await fetch(`/api/wells/${props.match.params.id}/`, 
  //   //     {headers: {
  //   //             'Content-Type': 'application/json',
  //   //             'X-CSRFToken': Cookies.get('csrftoken'),
  //   //             }
  //   //     });
  //   //     if (!response.ok) {
  //   //         console.log('Error fetching well');
  //   //     } else {
  //   //         const data = await response.json();                
  //   //         props.setWell(data);                                 
  //   //     }
  //   //   }
  //   //   fetchWell();
  //   // }
  // }, [preview])

   


  // console.log(props);
  // if (preview) {
  //   setSource(preview);
  // } else if (props.well){
  //   setSource(props.well.plat_image);
  // }

    if(props.well){  
      let source;
      if (preview) {
         source = preview;
      } else if (props.well.plat_image){
        source = props.well.plat_image;
      }    
      imageHTML=
     <div className="ImageForm">
       {/* if (props.well.plat_image) {
         <img src={props.well.plat_image} alt="plat_image" />
       } else {*/}
       {props.well.plat_image && <img className="prev" src={source} alt ="" />}
       <input type="file" name="plat_image" onChange={handleImage}/>
     </div>
   } else {
      imageHTML=<></>
   }


//
// src={source}
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
      setPreview('');
      props.setRefresh(Math.random());
      handleClose();
    }

    // let imageHTML;
  
  
    return (
      <>  
        <Modal show={props.showImage} onHide={handleClose}>
          <Modal.Header className="splash" closeButton>
            <Modal.Title>Plat</Modal.Title>
          </Modal.Header>
          <Modal.Body className="splash-body">
            {imageHTML}
          </Modal.Body>
          <Modal.Footer className="splash">           
            <Button variant="warning" onClick={handleUpload}>
              Upload Photo
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default withRouter(PlatImageModal);

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