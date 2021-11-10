import React from 'react';
import { JSCharting } from 'jscharting-react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie';

function Chart() {
    
    const [choice, setChoice] = useState('month');
    const [chartData, setChartData] = useState([]);

    

    useEffect(() => {
      let results=[];
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
            // console.log(results);
            setChartData(results);    
        }
    }

        fetchPricePeriod();
        return () => {
          //Do something??
        };
    }, [choice]);  //, fetchPricePeriod, results
    
    const config = {
        type: 'line',
        palette: ["rgba(184, 156, 45, 0.8)"],
        axisToZoom: 'x',

        legend_visible: false,
        
        title: {
            position: 'full',
            padding: 7,
            fill: ['#effcff', '#f8edff', 45],
            opacity: 0.7,
            boxVisible: true,
            radius: 7,
            outline: { color: '#a0d4ef', width: 1 },
            label: {
              text: 'WTI Oil Prices',
              style: {
                color: '#000',
                fontSize: '20px',
                fontFamily: 'Oswald, Tahoma, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'normal',
              },
              align: 'right',
            }
        },
            
        yAxis: { scale_minorInterval: 0.25, formatString: 'c' },
        
        defaultPoint: {
            marker: { outline: { width: 2, color: 'white' } },
        },

        defaultPoint_marker_visible: true,

        xAxis: {          
            formatString: 'd',
            scale_type: 'time',
        },
        
        defaultPoint_tooltip: '%xValue<br/>%yValue',

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

    const divStyle = {
        maxWidth: '700px',
        height: '400px',
        margin: '0px auto',
    };

    return (
        <>
        
        <div className="chart" style={divStyle}><JSCharting options={config} mutable={false} /></div>
        <div className="chart-buttons">
            <Button className="chart-button" onClick={handleMonth} variant="warning">Past Month</Button>
            <Button className="chart-button" onClick={handleWeek} variant="warning">Past Week</Button>
        </div>
        </>
    );
}

export default Chart;



/*
<h3>WTI Oil Prices:</h3> 
    AXIS FORMATTING
      // JS
    
        
        
        yAxis: { scale_minorInterval: 20, formatString: 'c' },
        

        scale_minorInterval: { unit: 'month', multiplier: 4 },
        defaultPoint_tooltip: '%xValue<br/>%yValue',
        
        
      });

// AXIS ZOOM:

        
        margin_right: 10,
        xAxis: {
          scale_type: 'time',
          defaultTick_enabled: false,
          customTicks: [
            { value_pattern: 'month', label_text: '%min' },
          ],
        },
        legend_visible: false,
        series: [
          {
            type: 'line spline',
            defaultPoint: {
              marker: { outline: { width: 2, color: 'white' } },
            },
            points: [
              { x: '04/1/2016', y: 74.78 },
              { x: '1/1/2019', y: 46.89 },
            ],
          },
        ],
      });






*/