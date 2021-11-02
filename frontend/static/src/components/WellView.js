// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';


function WellView(props) {
    
    const $faImage = <FontAwesomeIcon icon={faImage} size="5x" />
    
    function displayPopup() {
        const $popup = document.getElementById('popup');
        if ($popup.style.display === 'none'){
            $popup.style.display = 'block';
        } else {
            $popup.style.display = 'none';
        }
    }

    useEffect(() => {
        //Do something
    }, [props.well]);




    return (
        <div className="well-container">
            <div className="well-info">
                <h2>{props.well.lease} {props.well.well_number}</h2>
                <button onClick={displayPopup}>  {$faImage} <br /> Plat Button </button>  
                <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
                I'm a well! 
            </div>
            <div className="canvas-frame">
                <canvas id="canvas" width="25vw" height="90vh"></canvas>
            </div>
        </div>
    );
};

export default WellView