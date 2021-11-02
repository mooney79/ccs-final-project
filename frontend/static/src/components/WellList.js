import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import WellItem from './WellItem';
import Spinner from 'react-bootstrap/esm/Spinner';

function WellList(props){

    const [wellList, setWellList] = useState([])

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

    // if (wellList.length === 0) {
    //     return <div>Loading...</div>
    // } else {
    //     return <p>{wellList[0].API_number}</p>

    let list;
    if (wellList !== []){
        list = wellList.map(well => <WellItem key={well.id+9000} {...well} wellList={wellList} setWellList={setWellList} />)
    } else {
        list = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    return (
        <div className="well-list-container">
            <p><span className="bold-span"> Your wells: </span></p>
            <ul className="well-ul">
                {list}
            </ul>
        </div>
    )
    
}

export default WellList


/* Ok, so I need to fetch the user in App.js.  
Then use that to fetch associated wells to populate this component.
When this well is clicked on, I need to pass the well ID to the WellView component.


    



*/