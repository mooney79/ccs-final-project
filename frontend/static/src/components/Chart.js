import React from 'react';
import { JSCharting } from 'jscharting-react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie';

function Chart() {
    let results=[];
    const [choice, setChoice] = useState('month');
    const [chartData, setChartData] = useState([]);

    async function fetchPricePeriod(){        
        const response = await fetch(`/api/prices/past_${choice}/`, 
        {headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
              }
        });if(!response){
            console.log(response);
        } else {
            const data = await response.json();
            data.prices.forEach(row => {
                results.push({x: row.created_at, y: row.price});
            });
            results.forEach(row => {
                let year = row.x.slice(0,4);
                let month = row.x.slice(5,7);
                month = parseInt(month);
                month--;
                month = month.toString();
                let day = row.x.slice(8,10);
                row.x = new Date(year, month, day);
            })
            console.log(results);
            setChartData(results);    
        }
    }


    









    useEffect(() => {
        fetchPricePeriod();
    }, [choice]);
    
    const config = {
        type: 'line',

        line: {
            caps: {
              size: "200%",
              end_type: "arrow",
              start_type: "circle"
            }
          },

        defaultPoint_marker_visible: false,

        series: [
            {
                points: chartData                
            }
        ]
    };

    
    function handleMonth(){
        setChoice('month');
    };

    function handleWeek(){
        setChoice('week');
    };



    return (
        <>
        <h3>WTI Oil Prices:</h3> 
        <div className="chart"><JSCharting options={config} mutable={false} /></div>
        <div className="chart-buttons">
            <Button className="chart-button" onClick={handleMonth} variant="warning">Past Month</Button>
            <Button className="chart-button" onClick={handleWeek} variant="warning">Past Week</Button>
        </div>
        </>
    );
}

export default Chart;