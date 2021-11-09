import { useEffect, useRef, useState } from "react";
import dirt from '../StaticImages/cement-texture.jpeg';

function Diagram(props){
    const canvas0Ref = useRef(null);
    const canvas1Ref = useRef(null);
    const canvas2Ref = useRef(null);
    const canvas3Ref = useRef(null);
    const ctx0Ref = useRef(null);
    const ctx1Ref = useRef(null);
    const ctx2Ref = useRef(null);
    const ctx3Ref = useRef(null);
    const xlgEndRef = useRef(null);
    const lrgEndRef = useRef(null);
    const medEndRef = useRef(null);
    const regEndRef = useRef(null);
    const smlEndRef = useRef(null);
    const xsmEndRef = useRef(null);
    const [table, setTable] = useState({
        'xlg': xlgEndRef,
        'lrg': lrgEndRef,
        'med': medEndRef,
        'reg': regEndRef,
        'sml':smlEndRef,
        'xsm': xsmEndRef,
    });
    const [activeTable, setActiveTable] = useState('');

    useEffect(() => {
        const canvas0 = canvas0Ref.current;
        const ctx0 = canvas0.getContext('2d');
        ctx0Ref.current = ctx0;

        ctx0.width = window.innerWidth;
        ctx0.height = window.innerHeight;

        canvas0.addEventListener('resize', function() {
        ctx0.width = window.innerWidth;
        ctx0.height = window.innerHeight;
        });

        const canvas1 = canvas1Ref.current;
        const ctx1 = canvas1.getContext('2d');
        ctx1Ref.current = ctx1;

        ctx1.width = window.innerWidth;
        ctx1.height = window.innerHeight;

        canvas1.addEventListener('resize', function() {
        ctx1.width = window.innerWidth;
        ctx1.height = window.innerHeight;
        });

        let img = new Image();
        let ptrn;
        img.src = dirt;        

        const canvas2 = canvas2Ref.current;
        const ctx2 = canvas2.getContext('2d');
        ctx2Ref.current = ctx2;

        canvas2.addEventListener('resize', function() {
            ctx2.width = window.innerWidth;
            ctx2.height = window.innerHeight;
        });

        const canvas3 = canvas3Ref.current;
        const ctx3 = canvas3.getContext('2d');
        ctx3Ref.current = ctx3;

        canvas2.addEventListener('resize', function() {
            ctx2.width = window.innerWidth;
            ctx2.height = window.innerHeight;
        });


        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        
        drawCasings(props.wellCasings);

        img.onload = () => {
            ptrn = ctx1.createPattern(img, 'repeat');
            ctx1.fillStyle = ptrn;
            ctx2.fillStyle = ptrn;
            drawCements(props.wellCements);
            placePlugs(props.wellPlugs);
        }

        placePerforations(props.wellPerfs);

        if (props.well){
            drawDepthGuides(props.well.total_depth);
        }

    }, [props.wellCasings, props.wellCements, props.wellPerfs, props.wellPlugs, props.refresh]);

    function drawCement(x, y, w, h, x2){
        ctx1Ref.current.fillRect(x-x2, y, x2, h)
        ctx1Ref.current.fillRect(x+w, y, x2, h)
        // ctx1Ref.current.strokeStyle="white";
        // ctx1Ref.current.moveTo(x,y);
        // ctx1Ref.current.lineTo(x,y+h);
        // ctx1Ref.current.moveTo(x+w, y);
        // ctx1Ref.current.lineTo(x+w,y+h);
        // ctx1Ref.current.stroke();
    }

    function drawDepthGuides(depth){
        ctx0Ref.current.strokeStyle = "white";
        ctx0Ref.current.lineWidth=2;
        const x = canvas0Ref.current.width;
        const topLine = Math.round(depth*0.25);
        ctx0Ref.current.fillStyle = "white";
        ctx0Ref.current.font = '16px Oxygen';
        ctx0Ref.current.fillText(topLine, 10, 891*0.25-10);
        const midLine = Math.round(depth*0.5);
        ctx0Ref.current.fillText(midLine, 10, 891*0.5-10);
        const botLine = Math.round(depth*0.75);
        ctx0Ref.current.fillText(botLine, 10, 891*0.75-10);
        ctx0Ref.current.beginPath();
        ctx0Ref.current.setLineDash([5, 15]);
        ctx0Ref.current.moveTo(0, 891*0.25);
        ctx0Ref.current.lineTo(x,891*0.25);
        ctx0Ref.current.stroke();
        ctx0Ref.current.moveTo(0, 891*0.5);
        ctx0Ref.current.lineTo(x,  891*0.5);
        ctx0Ref.current.stroke();
        ctx0Ref.current.moveTo(0, 891*0.75);
        ctx0Ref.current.lineTo(x, 891*0.75);
        ctx0Ref.current.stroke();
    }

    function drawPipe(x, y, w, h, a){
        ctx2Ref.current.strokestyle = "brown";
        ctx2Ref.current.lineWidth= 3;    
        ctx2Ref.current.fillStyle=`rgba(182, 112, 37, ${a})`;
        ctx2Ref.current.fillRect(x, y, w, h, a);
        ctx2Ref.current.moveTo(x,y);
        ctx2Ref.current.lineTo(x,y+h);
        ctx2Ref.current.lineTo(x+30, y+h);
        ctx2Ref.current.moveTo(x+w, y);
        ctx2Ref.current.lineTo(x+w,y+h);
        ctx2Ref.current.lineTo(x+w-30, y+h)
        ctx2Ref.current.stroke();
    }
    
    function drawCasingSet(x, y, w){
        ctx2Ref.current.fillStyle="black";
        ctx2Ref.current.beginPath();
        ctx2Ref.current.moveTo(x,y);
        ctx2Ref.current.lineTo(x-30,y);
        ctx2Ref.current.lineTo(x,y-30);
        ctx2Ref.current.fill();

        ctx2Ref.current.beginPath();
        ctx2Ref.current.moveTo(x+w,y);
        ctx2Ref.current.lineTo(x+w+30, y);
        ctx2Ref.current.lineTo(x+w,y-30);
        ctx2Ref.current.fill();
    }

    // function drawPerforations(x, y, w){
    //     drawEachPerf(x, y);
    //     drawEachPerf(x, y+15);
    //     drawEachPerf(x, y+30);
    //     drawEachPerf(x+w, y);
    //     drawEachPerf(x+w, y+15);
    //     drawEachPerf(x+w, y+30);
    // }

    function drawPerfPair(x, y, w){
        drawEachPerf(x, y);
        drawEachPerf(x+w, y);
    }

    function drawEachPerf(x2,y2) {
        ctx2Ref.current.fillStyle = "black";
        ctx2Ref.current.beginPath();
        ctx2Ref.current.moveTo(x2, y2);
        ctx2Ref.current.lineTo(x2-30, y2+5);
        ctx2Ref.current.lineTo(x2, y2+10);
        ctx2Ref.current.lineTo(x2+30, y2+5);
        ctx2Ref.current.fill();
    }

    function drawCementPlug(x,y,w,h){
        ctx2Ref.current.fillRect(x, y, w, h);
    }

    function drawMechPlug(x,y,w,h){
        ctx3Ref.current.fillStyle="black";
        ctx3Ref.current.fillRect(x, y, w, h);
    }

    function drawDVPlug(x, y, w){
        ctx2Ref.current.beginPath();
        ctx2Ref.current.moveTo(x, y);
        ctx2Ref.current.lineTo(x-15, y+15);
        ctx2Ref.current.moveTo(x+w, y);
        ctx2Ref.current.lineTo(x+w+15, y+15);
        ctx2Ref.current.stroke();
    }

    //CenterX 222px
    //height 891px
    // Ending_depth is to total_depth as X is to 891
    //ED/TD = X/891
    //X = ED/TD * 891

    
    function drawCasings(casings){
        casings.forEach(casing => {
            if (casing.gauge === 'xlg' && casing.ending_depth > casing.starting_depth){
                const casingX=222-90;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=180;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=0;
                const xlgEnd = casingY+casingH;
                xlgEndRef.current = xlgEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
            }
            setTable(prevState => ({  
                ...prevState,        
                'xlg': xlgEndRef.current
            }));      
        })
        casings.forEach(casing => {
            if (casing.gauge === 'lrg' && casing.ending_depth > casing.starting_depth){
                const casingX=222-75;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=150;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=0;
                const lrgEnd = casingY+casingH;
                lrgEndRef.current = lrgEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
                setTable(prevState => ({  
                    ...prevState,        
                    'lrg': lrgEndRef.current
                }));
            }
        })
        casings.forEach(casing => {
            if (casing.gauge === 'med' && casing.ending_depth > casing.starting_depth){
                const casingX=222-60;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=120;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=0;
                const medEnd = casingY+casingH;
                medEndRef.current = medEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
                setTable(prevState => ({  
                    ...prevState,        
                    'med': medEndRef.current
                }));
            }
        })
        casings.forEach(casing => {
            if (casing.gauge === 'reg' && casing.ending_depth > casing.starting_depth){
                const casingX=222-45;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=90;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=0;
                const regEnd = casingY+casingH;
                regEndRef.current = regEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
                setTable(prevState => ({  
                    ...prevState,        
                    'reg': regEndRef.current
                }));
            }
        })
        casings.forEach(casing => {
            if (casing.gauge === 'sml' && casing.ending_depth > casing.starting_depth){
                const casingX=222-30;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=60;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=1;
                const smlEnd = casingY+casingH;
                smlEndRef.current = smlEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
                setTable(prevState => ({  
                    ...prevState,        
                    'sml': smlEndRef.current
                }));
            }
        });
        casings.forEach(casing => {
            if (casing.gauge === 'xsm' && casing.ending_depth > casing.starting_depth){
                const casingX=222-15;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=30;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=1;
                const xsmEnd = casingY+casingH;
                xsmEndRef.current = xsmEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
                setTable(prevState => ({  
                    ...prevState,        
                    'xsm': xsmEndRef.current
                }));
            }
        });
    }

    function drawCements(cements){
        cements.forEach(cement => {
            const cementY=Math.round(cement.starting_depth*891/props.well.total_depth);
            const cementH=Math.round(cement.ending_depth*891/props.well.total_depth)-cementY;
            const cementBottom = Math.round(cement.ending_depth*891/props.well.total_depth);
    
            // console.log(cement.id)
            const cementX = findPipeXAtY(cementBottom, table);
            const cementXtop = findPipeXAtY(cementY, table);
            const cementX2 = findNextPipeXAtY(cementX, cementXtop, cementY, table);
            let deltaX;
            // console.log(cementX, cementX2, cementXtop);
            if (cementX2 === 0){  
                deltaX = 15;
            } else {
                deltaX = cementX2;
            }
            const cementW = findPipeWAtY(cementBottom, table);
            drawCement(cementX, cementY, cementW, cementH, deltaX);
        })
    }

    function findPipeXAtY(y, table){
        if (y < table['xlg']){
            setActiveTable('xlg');
            return 222-90
        } else if (y < table['lrg']){
            setActiveTable('xlg');
            return 222-75
        } else if (y < table['med']){
            setActiveTable('lrg');
            return 222-60
        } else if (y < table['reg']){
            setActiveTable('med');
            return 222-45
        } else if (y < table['sml']){
            setActiveTable('reg');
            return 222-30
        } else if (y <= table['xsm']){
            setActiveTable('sml');
            return 222-15
        }
    };

    function findPipeWAtY(y, table){
        if (y <= table['xlg']){
            return 180
        } else if (y <= table['lrg']){
            return 150
        } else if (y <= table['med']){
            return 120
        } else if (y <= table['reg']){
            return 90
        } else if (y <= table['sml']){
            return 60
        } else if (y <= table['xsm']){
            return 30
        }
    };

    function findNextPipeXAtY(x, x2, y, table){
        let xArray = [];
        if (xlgEndRef.current !== null){
            xArray.push(findPipeXAtY(xlgEndRef.current-1, table));
        }
        if (lrgEndRef.current !== null){
            xArray.push(findPipeXAtY(lrgEndRef.current-1, table));
        } 
        if (medEndRef.current !== null){
            xArray.push(findPipeXAtY(medEndRef.current-1, table));
        }
        if (regEndRef.current !== null){
            xArray.push(findPipeXAtY(regEndRef.current-1, table));
        }
        if (smlEndRef.current !== null){
            xArray.push(findPipeXAtY(smlEndRef.current-1, table));
        }
        if (xsmEndRef.current !== null){
            xArray.push(findPipeXAtY(xsmEndRef.current-1, table));
        }
        
        xArray.sort(function(a, b){return a-b});
        
        if (x2 === x){
            return 15
        } else {
            return x - xArray[xArray.indexOf(x)-1];
        }
    }

    function placePerforations(perfs){
       perfs.forEach(perf => {
            const perfY=Math.round(perf.starting_depth*891/props.well.total_depth);
            const perfH=Math.round(perf.ending_depth*891/props.well.total_depth)-perfY;
            const perfX = findPipeXAtY(perfY+perfH, table);
            const perfW = findPipeWAtY(perfY+perfH, table);
            drawPerfPair(perfX, perfY, perfW);
        })
    }

    function placePlugs(plugs){
        plugs.forEach(plug => {
            if (plug.plug_type === "DV"){
                const plugY=plug.set_depth*891/props.well.total_depth;
                const plugX = findPipeXAtY(plugY, table);
                const plugW = findPipeWAtY(plugY, table);
                drawDVPlug(plugX, plugY, plugW);
            } else {
                const plugY=plug.starting_depth*891/props.well.total_depth;
                const plugH=(plug.ending_depth*891/props.well.total_depth)-plugY;
                if (plugY+plugH <= xlgEndRef.current){
                    const plugX=222-90;
                    const plugW=180;
                    if (plug.plug_type === "CP"){
                        drawCementPlug(plugX, plugY, plugW, plugH);
                    } else {
                        drawMechPlug(plugX, plugY, plugW, plugH);
                    }
                } else if (plugY+plugH <= lrgEndRef.current){
                    const plugX=222-75;
                    const plugW=150;
                    if (plug.plug_type === "CP"){
                        drawCementPlug(plugX, plugY, plugW, plugH);
                    } else {
                        drawMechPlug(plugX, plugY, plugW, plugH);
                    }                    
                } else if (plugY+plugH <= medEndRef.current){
                    const plugX=222-60;
                    const plugW=120;
                    if (plug.plug_type === "CP"){
                        drawCementPlug(plugX, plugY, plugW, plugH);
                    } else {
                        drawMechPlug(plugX, plugY, plugW, plugH);
                    }    
                } else if (plugY+plugH <= regEndRef.current){
                    const plugX=222-45;
                    const plugW=90;
                    if (plug.plug_type === "CP"){
                        drawCementPlug(plugX, plugY, plugW, plugH);
                    } else {
                        drawMechPlug(plugX, plugY, plugW, plugH);
                    }    
                } else if (plugY+plugH <= smlEndRef.current){
                    const plugX=222-30;
                    const plugW=60;
                    if (plug.plug_type === "CP"){
                        drawCementPlug(plugX, plugY, plugW, plugH);
                    } else {
                        drawMechPlug(plugX, plugY, plugW, plugH);
                    }    
                } else {
                    const plugX=222-15;
                    const plugW=30;
                    if (plug.plug_type === "CP"){
                        drawCementPlug(plugX, plugY, plugW, plugH);
                    } else {
                        drawMechPlug(plugX, plugY, plugW, plugH);
                    }    
                }
            }
        })
    }

    return (
        <div className="bg-pseudo">
            <canvas id="canvas0" width="444" height="900" ref={canvas0Ref}></canvas>
            <canvas id="canvas1" width="444" height="900" ref={canvas1Ref}></canvas>
            <canvas id="canvas2" width="444" height="900" ref={canvas2Ref}></canvas>
            <canvas id="canvas3" width="444" height="900" ref={canvas3Ref}></canvas>
        </div>
    )
}

export default Diagram;