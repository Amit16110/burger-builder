import React from "react";

import Classes from "./BuildControl.module.css";

const buildControl = (props) => {
  return (
    <div className={Classes.buildControl}>
      <div className={Classes.Label}>{props.label}</div>
        <button 
            className={Classes.less} 
            onClick={props.remove} 
            disabled = {props.diableButton}> Less
        </button>
      <button className={Classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
