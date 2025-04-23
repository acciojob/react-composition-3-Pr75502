
import React from "react";
import './../styles/App.css';
import ToolTip from "./Tooltip";


const App = () => {
  return (
    <div>
      <ToolTip text="This is a tooltip">
        <h2>Hover over me</h2>

      </ToolTip>

      <ToolTip text="This is another tooltip">
      <p>Hover over me to see another tooltip</p>
      </ToolTip>
    </div>
  )
}

export default App
