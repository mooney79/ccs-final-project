// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'


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

    // async function fetchWell(pk) {
    //     const response = await fetch(`/api/wells/${pk}/`);
        
    //     const data = await response.json();
     
    // }


    return (
        <div className="well-container">
            <div className="well-info">
                I'm a well! 
                <button onClick={displayPopup}>  {$faImage} <br /> Plat Button </button>  
                <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
            </div>
            <div className="canvas-frame">
                <canvas id="canvas" width="25vw" height="90vh"></canvas>
            </div>
        </div>
    );
};

export default WellView
