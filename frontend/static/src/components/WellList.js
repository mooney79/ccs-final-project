import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import WellItem from './WellItem';
import Spinner from 'react-bootstrap/esm/Spinner';

function WellList(props){

    const [wellList, setWellList] = useState([]);
    

    useEffect(()=> {
        const fetchWells = async () => {
        const response = await fetch('/api/wells/user/', 
        {headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                }
        });
        if (!response.ok) {
            console.log('Error fetching wells');
        } else {
            const data = await response.json();
            setWellList(data);
        }
        }
        fetchWells();
    }, []);

    let list;
    if (wellList !== []){
        list = wellList.map(well => <WellItem key={well.id+9000} {...well} wellList={wellList} setWellList={setWellList} setWell={props.setWell} />)
    } else {
        list = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }
    return (
        <div className="well-list-container">
            <p><span className="bold-span"> Your wells: </span></p>
            <ul className="well-ul">
                {list}
                <li className="ListItem" id="new-well">
                    <button className="list-p li-button" onClick={() => {console.log("I fired!"); props.setShowNew(true);console.log(props.showNew)}}> Add New Well</button>
                </li>
            </ul>
        </div>
    )    
}

export default WellList