
import React from "react";
import './../styles/App.css';
import ToolTip from "./Tooltip";


const App = () => {
  return (
    <div>
      <ToolTip text="This is a tooltip">
        <h2 className="tooltip">
          This is a tooltip
         
          </h2>

      </ToolTip>

      <ToolTip text="This is another tooltip">
        <p className="tooltip">
        Hover over me to see another tooltip
          
         </p>
      </ToolTip>
    </div>
  )
}

export default App
