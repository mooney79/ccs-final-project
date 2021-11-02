function WellView(props) {
    
    function displayPopup() {
        const $popup = document.getElementById('popup');
        if ($popup.style.display === 'none'){
            $popup.style.display = 'block';
        } else {
            $popup.style.display = 'none';
        }
    }

    return (
        <div className="well-container">
            <div className="well-info">
                I'm a well! 
                <button onClick={displayPopup}>  Plat Button<i class="far fa-image"></i> </button>  
                <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
            </div>
            <div className="canvas-frame">
                <canvas id="canvas" width="25vw" height="90vh"></canvas>
            </div>
        </div>
    );
};

export default WellView
