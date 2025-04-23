import React, { useState} from "react";



function ToolTip({ text, children }) {
const [show, setShow] = useState(false);    
    return (
        <div className="tooltip"
            onMouseEnter={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
        >
            {show && <div className="tooltiptext">{text}</div>}
            {children}
           
        </div>
    )
}
export default ToolTip;