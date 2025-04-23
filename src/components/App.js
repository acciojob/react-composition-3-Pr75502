
import React from "react";
import './../styles/App.css';
import ToolTip from "./Tooltip";


const App = () => {
  return (
    <div>
      <ToolTip text="This is a tooltip">
        <h1>Hover over me (h2)</h1>

      </ToolTip>

      <ToolTip text="This is another tooltip">
      <h2>Hover over me to see another tooltip (p)</h2>
      </ToolTip>
    </div>
  )
}

export default App
