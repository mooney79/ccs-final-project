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
    // const [activeTable, setActiveTable] = useState('');
    // const [cArray, setCArray] = useState([]);

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
        // drawCasings, drawCements, placePerforations, placePlugs, props.well]);//[]




    function drawCement(x, y, w, h, x2){
        ctx1Ref.current.fillRect(x-x2, y, x2, h);
        ctx1Ref.current.fillRect(x+w, y, x2, h);
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

    function drawPipe(x, y, w, h, a, size){
        ctx2Ref.current.beginPath();
        let next;
        switch (size){
            case 'xlg': ctx2Ref.current.lineWidth= 6;
                if (table['lrg']['current'] !== null ){
                    next = 15;
                } else if (table['med']['current']  !== null ){
                    next = 30;
                } else if (table['reg']['current']  !== null ){
                    next = 45;
                } else if (table['sml']['current']  !== null ){
                    next = 60;
                } else if (table['xsm']['current']  !== null ){
                    next = 75;
                } else {next = 90}
                break;
            case 'lrg': ctx2Ref.current.lineWidth= 5;
                if (table['med']['current']  !== null ){
                    next = 15;
                } else if (table['reg']['current']  !== null ){
                    next = 30;
                } else if (table['sml']['current']  !== null ){
                    next = 45;
                } else if (table['xsm']['current']  !== null ){
                    next = 60;
                } else {next = 75}
                break;
            case 'med': ctx2Ref.current.lineWidth= 4;
                if (table['reg']['current']  !== null ){
                    next = 15;
                } else if (table['sml']['current'] !== null ){
                    next = 30;
                } else if (table['xsm']['current']  !== null ){
                    next = 45;
                } else {next = 60}
                break;
            case 'reg': ctx2Ref.current.lineWidth= 3;
                if (table['sml']  !== null ){
                    next = 15;
                } else if (table['xsm']['current']  !== null ){
                    next = 30;
                } else {
                    next = 45;
                }
                break;
            case 'sml': ctx2Ref.current.lineWidth= 2;
                if (table['xsm']['current']  !== null ){
                    next = 15;
                } else {
                    next = 30;
                }
                break;
            case 'xsm': ctx2Ref.current.lineWidth= 1;
                next = 15;
                break;
            default: 
                console.log('Error setting casing width');
                break;
        }
        ctx2Ref.current.strokestyle = "black";
        ctx2Ref.current.fillStyle=`rgba(182, 112, 37, ${a})`;
        ctx2Ref.current.fillRect(x, y, w, h, a);
        ctx2Ref.current.moveTo(x,y);
        ctx2Ref.current.lineTo(x,y+h);
        ctx2Ref.current.lineTo(x+next, y+h); //Change to get next pipe?
        ctx2Ref.current.stroke();
        ctx2Ref.current.closePath();

        ctx2Ref.current.beginPath();
        ctx2Ref.current.moveTo(x+w, y);
        ctx2Ref.current.lineTo(x+w,y+h);
        ctx2Ref.current.lineTo(x+w-next, y+h)
        ctx2Ref.current.stroke();
        ctx2Ref.current.closePath();
    }
    
    function drawCasingSet(x, y, w, size){
        ctx2Ref.current.fillStyle="black";
        let lineWidth;
        switch (size){
            case 'xlg': lineWidth = 3;
                break;
            case 'lrg': lineWidth = 2.5;
                break;
            case 'med': lineWidth = 2;
                break;
            case 'reg': lineWidth = 1.5;
                break;
            case 'sml': lineWidth = 1;
                break;
            case 'xsm': lineWidth = 0.5;
                break;
            default: 
                console.log('Error setting casing width');
                break;
        }

        ctx2Ref.current.beginPath();
        ctx2Ref.current.moveTo(x,y+lineWidth);
        ctx2Ref.current.lineTo(x-30,y+lineWidth);
        ctx2Ref.current.lineTo(x,y-30+lineWidth);
        ctx2Ref.current.fill();

        ctx2Ref.current.beginPath();
        ctx2Ref.current.moveTo(x+w,y+lineWidth);
        ctx2Ref.current.lineTo(x+w+30, y+lineWidth);
        ctx2Ref.current.lineTo(x+w,y-30+lineWidth);
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
        ctx2Ref.current.strokeStyle = "white";
        ctx2Ref.current.moveTo(x2, y2-5);
        ctx2Ref.current.lineTo(x2-30, y2);
        ctx2Ref.current.lineTo(x2, y2+5);
        ctx2Ref.current.lineTo(x2+30, y2);
        ctx2Ref.current.lineTo(x2, y2-5);
        ctx2Ref.current.stroke();
        ctx2Ref.current.closePath();
        ctx2Ref.current.fill();
        ctx2Ref.current.strokeStyle = "black";
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
        ctx2Ref.current.lineWidth = 6;
        ctx2Ref.current.moveTo(x, y);
        ctx2Ref.current.lineTo(x-15, y+15);
        ctx2Ref.current.moveTo(x+w, y);
        ctx2Ref.current.lineTo(x+w+15, y+15);
        ctx2Ref.current.stroke();
        ctx2Ref.current.closePath();
    }

    //CenterX 222px
    //height 891px
    // Ending_depth is to total_depth as X is to 891
    //ED/TD = X/891
    //X = ED/TD * 891

    function findA(casings, cements){
        let casingArray={};
        let cementArray=[];
        casings.forEach(casing => {
            if (casing.gauge === 'xlg'){  
                const xlgEnd = Math.round(casing.ending_depth*891/props.well.total_depth);
                xlgEndRef.current = xlgEnd;
                casingArray['xlg'] = {
                    id: casing.id,
                    x: 132,
                    depth: xlgEndRef.current}; 
            } else if (casingArray['xlg'] === undefined){
                casingArray['xlg'] = {
                    x: 0,
                    depth: 0,
                };
            }
            if (casing.gauge === 'lrg'){
                const lrgEnd = Math.round(casing.ending_depth*891/props.well.total_depth);
                lrgEndRef.current = lrgEnd;
                casingArray['lrg'] = {
                    id: casing.id,
                    x: 147,
                    depth: lrgEndRef.current};
            } else if (casingArray['lrg'] === undefined){
                casingArray['lrg'] = {
                    x: 0,
                    depth: 0,
                };
            }
            if (casing.gauge === 'med'){
                const medEnd = Math.round(casing.ending_depth*891/props.well.total_depth);
                medEndRef.current = medEnd;
                casingArray['med'] = {
                    id: casing.id,
                    x: 162,
                    depth: medEndRef.current};
            } else if (casingArray['med'] === undefined){
                casingArray['med'] = {
                    x: 0,
                    depth: 0,
                };
            }
            if (casing.gauge === 'reg'){
                const regEnd = Math.round(casing.ending_depth*891/props.well.total_depth);
                regEndRef.current = regEnd;
                casingArray['reg'] = {
                    id: casing.id,
                    x: 177,
                    depth: regEndRef.current};
            } else if (casingArray['reg'] === undefined){
                casingArray['reg'] = {
                    x: 0,
                    depth: 0,
                };
            }
            if (casing.gauge === 'sml'){
                const smlEnd = Math.round(casing.ending_depth*891/props.well.total_depth);
                smlEndRef.current = smlEnd;
                casingArray['sml'] = {
                    id: casing.id,
                    x: 192,
                    depth: smlEndRef.current};
            } else if (casingArray['sml'] === undefined) {
                casingArray['sml'] = {
                    x: 0,
                    depth: 0,
                };
            }
            if (casing.gauge === 'xsm'){
                const xsmEnd = Math.round(casing.ending_depth*891/props.well.total_depth);
                xsmEndRef.current = xsmEnd;
                casingArray['xsm'] = {
                    id: casing.id,
                    x: 207,
                    depth: xsmEndRef.current};
            }
            else if (casingArray['xsm'] === undefined){
                casingArray['xsm'] = {
                    x: 0,
                    depth: 0,
                };
            }
        });

        cements.forEach(cement => {
            const cementY=Math.round(cement.starting_depth*891/props.well.total_depth);
            const cementBottom = Math.round(cement.ending_depth*891/props.well.total_depth);
            let cementXTop;
            let cementXBottom;
            if (cementY < casingArray['xlg']['depth']){
                cementXTop = 132;
            } else if (cementY < casingArray['lrg']['depth']){
                cementXTop = 147;
            } else if (cementY < casingArray['med']['depth']){
                cementXTop = 162;
            } else if (cementY < casingArray['reg']['depth']){
                cementXTop = 177;
            } else if (cementY < casingArray['sml']['depth']){
                cementXTop = 192;
            } else if (cementY < casingArray['xsm']['depth']){
                cementXTop = 207; 
            }
            if (cementBottom <= casingArray['xlg']['depth'] +1){
                cementXBottom = 132;
            } else if (cementBottom <= casingArray['lrg']['depth'] +1){
                cementXBottom = 147;
            } else if (cementBottom <= casingArray['med']['depth'] +1){
                cementXBottom = 162;
            } else if (cementBottom <= casingArray['reg']['depth'] +1){
                cementXBottom = 177;
            } else if (cementBottom <= casingArray['sml']['depth'] +1){
                cementXBottom = 192;
            } else if (cementBottom <= casingArray['xsm']['depth'] +1){
                cementXBottom = 207; 
            }

            let cementW = cementXTop = cementXBottom;
            if (cementW === 0){
                cementW = 15;
            }

            cementArray.push({TopY: cementY, BottomY: cementBottom, TopX: cementXTop, BottomX: cementXBottom, W: cementW});
        });                        
        
        let idArray=[];
        for (let i = 0; i < cementArray.length; i++){
            if (cementArray[i]['TopX']-cementArray[i]['W'] <= casingArray['xlg']['x'] && cementArray[i]['TopY'] < casingArray['xlg']['depth'] && cementArray[i]['bottomY'] !== cementArray[i]['TopY'] && (idArray.indexOf(casingArray['xlg']['id']) === -1)){
                idArray.push(casingArray['xlg']['id']);
            } else if (cementArray[i]['TopX'] - cementArray[i]['W'] <= casingArray['lrg']['x'] && cementArray[i]['TopY'] < casingArray['lrg']['depth'] && cementArray[i]['bottomY'] !== cementArray[i]['TopY'] && (idArray.indexOf(casingArray['lrg']['id']) === -1)){
                idArray.push(casingArray['lrg']['id']);
            } else if (cementArray[i]['TopX'] -cementArray[i]['W'] <= casingArray['med']['x'] && cementArray[i]['TopY'] < casingArray['med']['depth'] && cementArray[i]['bottomY'] !== cementArray[i]['TopY'] && (idArray.indexOf(casingArray['med']['id']) === -1)){
                idArray.push(casingArray['med']['id']);
            } else if (cementArray[i]['TopX'] -cementArray[i]['W'] <= casingArray['reg']['x'] && cementArray[i]['TopY'] < casingArray['reg']['depth'] && cementArray[i]['bottomY'] !== cementArray[i]['TopY'] && (idArray.indexOf(casingArray['reg']['id']) === -1)){
                idArray.push(casingArray['reg']['id']);
            } else if (cementArray[i]['TopX'] -cementArray[i]['W'] <= casingArray['sml']['x'] && cementArray[i]['TopY'] < casingArray['sml']['depth'] && cementArray[i]['bottomY'] !== cementArray[i]['TopY'] && (idArray.indexOf(casingArray['sml']['id']) === -1)){
                idArray.push(casingArray['sml']['id']);
            } else if (cementArray[i]['TopX'] -cementArray[i]['W'] <= casingArray['xsm']['x'] && cementArray[i]['TopY'] < casingArray['xsm']['depth'] && cementArray[i]['bottomY'] !== cementArray[i]['TopY'] && (idArray.indexOf(casingArray['xsm']['id']) === -1)){
                idArray.push(casingArray['xsm']['id']);
            }
        }
        idArray.pop();
        return idArray;
    }


    
    function drawCasings(casings){
        const aIndex = findA(props.wellCasings, props.wellCements);
        let casingArray=[];
        casings.forEach(casing => {
            let casingA;
            if (casing.gauge === 'xlg' && casing.ending_depth > casing.starting_depth){
                const casingX=222-90;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=180;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                casingArray.push(casingX);
                
                if (aIndex.includes(casing.id)){
                     casingA=0;
                } else {
                     casingA=1;
                }
                
                const xlgEnd = casingY+casingH;
                xlgEndRef.current = xlgEnd;

                if (casingH > 0){
                    drawPipe(casingX, casingY, casingW, casingH, casingA, casing.gauge);
                    drawCasingSet(casingX, casingY+casingH, casingW, casing.gauge);
                }
            }
            setTable(prevState => ({  
                ...prevState,        
                'xlg': xlgEndRef.current
            }));      
        })
        casings.forEach(casing => {
            let casingA;
            if (casing.gauge === 'lrg' && casing.ending_depth > casing.starting_depth){
                const casingX=222-75;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=150;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                casingArray.push(casingX);
                if (aIndex.includes(casing.id)){
                     casingA=0;
                } else {
                     casingA=1;
                }
                const lrgEnd = casingY+casingH;
                lrgEndRef.current = lrgEnd; 
                if (casingH > 0){
                    drawPipe(casingX, casingY, casingW, casingH, casingA, casing.gauge);
                    drawCasingSet(casingX, casingY+casingH, casingW, casing.gauge);
                }                setTable(prevState => ({  
                    ...prevState,        
                    'lrg': lrgEndRef.current
                }));
            }
        })
        casings.forEach(casing => {
            let casingA;
            if (casing.gauge === 'med' && casing.ending_depth > casing.starting_depth){
                const casingX=222-60;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=120;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                casingArray.push(casingX);
                if (aIndex.includes(casing.id)){
                     casingA=0;
                } else {
                     casingA=1;
                }
                const medEnd = casingY+casingH;
                medEndRef.current = medEnd; 
                if (casingH > 0){
                    drawPipe(casingX, casingY, casingW, casingH, casingA, casing.gauge);
                    drawCasingSet(casingX, casingY+casingH, casingW, casing.gauge);
                }
                setTable(prevState => ({  
                    ...prevState,        
                    'med': medEndRef.current
                }));
            }
        })
        casings.forEach(casing => {
            let casingA;
            if (casing.gauge === 'reg' && casing.ending_depth > casing.starting_depth){
                const casingX=222-45;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=90;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                casingArray.push(casingX);
                if (aIndex.includes(casing.id)){
                     casingA=0;
                } else {
                     casingA=1;
                }
                const regEnd = casingY+casingH;
                regEndRef.current = regEnd; 
                if (casingH > 0){
                    drawPipe(casingX, casingY, casingW, casingH, casingA, casing.gauge);
                    drawCasingSet(casingX, casingY+casingH, casingW, casing.gauge);
                }
                setTable(prevState => ({  
                    ...prevState,        
                    'reg': regEndRef.current
                }));
            }
        })
        casings.forEach(casing => {
            let casingA;
            if (casing.gauge === 'sml' && casing.ending_depth > casing.starting_depth){
                const casingX=222-30;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=60;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                casingArray.push(casingX);
                if (aIndex.includes(casing.id)){
                     casingA=0;
                } else {
                     casingA=1;
                }
                const smlEnd = casingY+casingH;
                smlEndRef.current = smlEnd; 
                if (casingH > 0){
                    drawPipe(casingX, casingY, casingW, casingH, casingA, casing.gauge);
                    drawCasingSet(casingX, casingY+casingH, casingW, casing.gauge);
                }
                setTable(prevState => ({  
                    ...prevState,        
                    'sml': smlEndRef.current
                }));
            }
        });
        casings.forEach(casing => {
            let casingA;
            if (casing.gauge === 'xsm' && casing.ending_depth > casing.starting_depth){
                const casingX=222-15;
                const casingY=Math.round(casing.starting_depth*891/props.well.total_depth);
                const casingW=30;
                const casingH=Math.round(casing.ending_depth*891/props.well.total_depth)-casingY;
                casingArray.push(casingX);
                if (aIndex.includes(casing.id)){
                     casingA=0;
                } else {
                     casingA=1;
                }
                const xsmEnd = casingY+casingH;
                xsmEndRef.current = xsmEnd; 
                if (casingH > 0){
                    drawPipe(casingX, casingY, casingW, casingH, casingA, casing.gauge);
                    drawCasingSet(casingX, casingY+casingH, casingW, casing.gauge);
                }
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
            // findA(cementXtop, cementX);
            // console.log(cArray);
            // console.log(cement.id, cementX, cementX2, cementXtop);
            if (cementX2 === 0){  
                deltaX = 15;
            } else {
                deltaX = cementX2;
            }
            const cementW = findPipeWAtY(cementBottom, table);
            if (cementH > 0){
                drawCement(cementX, cementY, cementW, cementH, deltaX);
            }
        })
    }

    function findPipeXAtY(y, table){
        // console.log(table);
        if (y < table['xlg']){
            // setActiveTable('xlg');
            return 222-90
        } else if (y < table['lrg']){
            // setActiveTable('xlg');
            return 222-75
        } else if (y < table['med']){
            // setActiveTable('lrg');
            return 222-60
        } else if (y < table['reg']){
            // setActiveTable('med');
            return 222-45
        } else if (y <= table['sml']){
            // setActiveTable('reg');
            return 222-30
        } else if (y <= table['xsm']){
            // setActiveTable('sml');
            return 222-15
        }
    };

    function findPipeWAtY(y, table){
        if (y <= table['xlg']){
            return 180
        } else if (y < table['lrg']){
            return 150
        } else if (y < table['med']){
            return 120
        } else if (y < table['reg']){
            return 90
        } else if (y <= table['sml']){
            return 60
        } else if (y <= table['xsm']){
            return 30
        }
    };

    function findNextPipeXAtY(x, x2, y, table){
        //Y is already set for x, x2.
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
            if (perfH > 0){
                drawPerfPair(perfX, perfY, perfW);
            }
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
                if (plugH > 0){
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
            }
        })
    }

    // function handleCollapse(){
    //     props.setShowCollapse(!props.showCollapse);
    //     console.log(props.showCollapse);
    // };
//onClick={handleCollapse}
    return (
        <div className="bg-pseudo" >
            <canvas id="canvas0" width="444" height="900" ref={canvas0Ref}></canvas>
            <canvas id="canvas1" width="444" height="900" ref={canvas1Ref}></canvas>
            <canvas id="canvas2" width="444" height="900" ref={canvas2Ref}></canvas>
            <canvas id="canvas3" width="444" height="900" ref={canvas3Ref} ></canvas>
        </div>
    )
}

export default Diagram;