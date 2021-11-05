import { useEffect, useRef } from "react";
import dirt from '../StaticImages/cement-texture.jpeg';

function Diagram(props){
    const canvas1Ref = useRef(null);
    const canvas2Ref = useRef(null);
    const ctx1Ref = useRef(null);
    const ctx2Ref = useRef(null);
    const lrgEndRef = useRef(null);
    const medEndRef = useRef(null);
    const smlEndRef = useRef(null);
    // const centerX = 222;

   

    useEffect(() => {
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
        // canvas2 = document.getElementById('canvas2');
        const ctx2 = canvas2.getContext('2d');
        ctx2Ref.current = ctx2;

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
            drawCements(props.wellCements);
        }

        placePerforations(props.wellPerfs);

        placePlugs(props.wellPlugs);

    }, [props.wellCasings, props.wellCements, props.wellPerforations, props.wellPlugs, props.refresh]);

    function drawCement(x, y, w, h){
        ctx1Ref.current.strokestyle = "darkgray";
        ctx1Ref.current.lineWidth= 3;    
        ctx1Ref.current.fillRect(x, y, w, h);
        ctx1Ref.current.moveTo(x,y);
        ctx1Ref.current.lineTo(x,y+h);
        ctx1Ref.current.moveTo(x+w, y);
        ctx1Ref.current.lineTo(x+w,y+h);
        ctx1Ref.current.stroke();
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

    function drawPlug(x,y,w,h){
        ctx2Ref.current.fillStyle="black";
        ctx2Ref.current.fillRect(x, y, w, h);
        // ctx2Ref.current.clearRect(x+5, y+5, w-10, h*0.6);
        // ctx2Ref.current.fillRect(x+10, y+10, w-20, h*0.3);
    }

    //CenterX 222px
    //height 891px
    // Ending_depth is to total_depth as X is to 891
    //ED/TD = X/891
    //X = ED/TD * 891
    //console.log(props.wellCasings);
    // console.log(props.well.total_depth);

    function drawCasings(casings){
        casings.forEach(casing => {
            if (casing.gauge === 'lrg' && casing.ending_depth > 0){
                const casingX=222-90;
                const casingY=casing.starting_depth*891/props.well.total_depth;
                const casingW=180;
                const casingH=(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=1;
                const lrgEnd = casingY+casingH;
                lrgEndRef.current = lrgEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
            }
        })
        casings.forEach(casing => {
            if (casing.gauge === 'med' && casing.ending_depth > 0){
                const casingX=222-60;
                const casingY=casing.starting_depth*891/props.well.total_depth;
                const casingW=120;
                const casingH=(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=1;
                const medEnd = casingY+casingH;
                medEndRef.current = medEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
            }
        })
        casings.forEach(casing => {
            if (casing.gauge === 'sml' && casing.ending_depth > 0){
                const casingX=222-30;
                const casingY=casing.starting_depth*891/props.well.total_depth;
                const casingW=60;
                const casingH=(casing.ending_depth*891/props.well.total_depth)-casingY;
                const casingA=1;
                const smlEnd = casingY+casingH;
                smlEndRef.current = smlEnd; 
                drawPipe(casingX, casingY, casingW, casingH, casingA);
                drawCasingSet(casingX, casingY+casingH, casingW);
            }
        });
    }

    function drawCements(cements){
        cements.forEach(cement => {
            const cementY=cement.starting_depth*891/props.well.total_depth;
            const cementH=(cement.ending_depth*891/props.well.total_depth)-cementY;
            if (cementY+cementH <= lrgEndRef.current){
                const cementX=222-120;
                const cementW=240;
                drawCement(cementX, cementY, cementW, cementH);
            } else if (cementY+cementH <= medEndRef.current){
                const cementX=222-90;
                const cementW=180;
                drawCement(cementX, cementY, cementW, cementH);
            } else {
                const cementX=222-45;
                const cementW=90;
                drawCement(cementX, cementY, cementW, cementH);
            }             
        })
    }

    function placePerforations(perfs){
       perfs.forEach(perf => {
            const perfY=perf.starting_depth*891/props.well.total_depth;
            const perfH=(perf.ending_depth*891/props.well.total_depth)-perfY;
            // let result = perfH*100/props.well.total_depth;
            if (perfY+perfH <= lrgEndRef.current){
                const perfX=222-90;
                const perfW=180;
                drawPerfPair(perfX, perfY, perfW);
            } else if (perfY+perfH <= medEndRef.current){
                const perfX=222-60;
                const perfW=120;
                drawPerfPair(perfX, perfY, perfW);
            } else {
                const perfX=222-30;
                const perfW=60;
                drawPerfPair(perfX, perfY, perfW);
            } 
        })
    }

    function placePlugs(plugs){
        plugs.forEach(plug => {
             const plugY=plug.starting_depth*891/props.well.total_depth;
             const plugH=(plug.ending_depth*891/props.well.total_depth)-plugY;
            //  let result = Math.floor(plugH/20);
             if (plugY+plugH <= lrgEndRef.current){
                 const plugX=222-90;
                 const plugW=180;
                 drawPlug(plugX, plugY, plugW, plugH);
             } else if (plugY+plugH <= medEndRef.current){
                 const plugX=222-60;
                 const plugW=120;
                 drawPlug(plugX, plugY, plugW, plugH);
             } else {
                 const plugX=222-30;
                 const plugW=60;
                 drawPlug(plugX, plugY, plugW, plugH);
             } 
         })
     }

    return (
        <>
            <canvas id="canvas1" width="444" height="900" ref={canvas1Ref}></canvas>
            <canvas id="canvas2" width="444" height="900" ref={canvas2Ref}></canvas>
        </>
    )
}

export default Diagram;

// TO DO
// ------
// * Put in error checking to make sure that ending depth is greater than starting 
// depth before rendering.
// * Figure out how to get diagram to refresh on element deletion.