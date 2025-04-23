
import React from "react";
import './../styles/App.css';
import ToolTip from "./Tooltip";


const App = () => {
  return (
    <div>
      <ToolTip text="Hover over me">
        <h2 className="tooltip">
          This is a tooltip
         
          </h2>

      </ToolTip>

      <ToolTip text="Hover over me to see another tooltip">
        <p className="tooltip">
          This is another tooltip
          
         </p>
      </ToolTip>
    </div>
  )
}

export default App
