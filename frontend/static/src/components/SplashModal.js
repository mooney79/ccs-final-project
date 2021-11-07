import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie'
import CMlogo from '../StaticImages/CMlogo.png';
import Chart from './Chart';
import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import { NavLink } from 'react-router-dom';



function SplashModal(props) {
    const handleClose = () => props.setShowSplash(false);
    const [price, setPrice] = useState("$0.00");
    const [showCollapse, setShowCollapse] = useState(false);
    
    const fetchPrice = async () => {
      const response = await fetch('/api/prices/latest/', 
      {headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
            }
      });
      if (!response.ok) {
        console.log('Oops, I did it again.');
      } else {
        const data = await response.json();
        setPrice(data.formatted);
      }
    }
    
    useEffect(() => {
      fetchPrice();
    }, []);

    let welcomeHTML;
    if (props.userName){
      welcomeHTML=<h2 className="fp-h1 text-center"> Welcome back, {props.userName}! </h2>
    } else {
      welcomeHTML=<h2 className="fp-h1 text-center"> Welcome! Please <NavLink to='/login'>log in</NavLink></h2>
    }
           
    return (
      <>  
        <Modal id="splash-modal" size="lg" show={props.showSplash} onHide={handleClose}>
          <Modal.Header  className="splash" closeButton>
          </Modal.Header>
          <Modal.Body className="splash-body">
            <img className="logo" src={CMlogo} alt="Case Manager logo" />
            <p className="text-center WTI-prompt"  
                onClick={() => setShowCollapse(!showCollapse)} 
                aria-controls="price-chart"
                aria-expanded={showCollapse}> 
                <span className="bold-span">Current WTI Price:</span> {price}
            </p>
            <Collapse in={showCollapse}>
              <div id="price-chart">
                <Chart />
              </div>
            </Collapse>
            {welcomeHTML}
          </Modal.Body>
          <Modal.Footer className="splash">
            <Button variant="warning" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default SplashModal;