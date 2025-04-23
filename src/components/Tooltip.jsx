import React, { useState} from "react";



function ToolTip({ text, children }) {
const [show, setShow] = useState(false);    
    return (
        <div className="tooltip"
            onMouseEnter={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
        >
            {children}
            {show && <p className="tooltiptext">{text}</p>}
        </div>
    )
}
export default ToolTip;