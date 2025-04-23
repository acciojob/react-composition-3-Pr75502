
import React from "react";
import './../styles/App.css';
import ToolTip from "./Tooltip";


const App = () => {
  return (
    <div>
      <ToolTip text="Hover over me">
        <h2 className="tooltip">
          <div>This is a tooltip</div>
          
         
          </h2>

      </ToolTip>

      <ToolTip text="Hover over me to see another tooltip">
        <p className="tooltip">
          <div>This is another tooltip</div>
          
          
         </p>
      </ToolTip>
    </div>
  )
}

export default App
