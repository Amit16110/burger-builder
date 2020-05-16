import React from "react";

import Classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={Classes.BuildControls}>
             {/* Here add build controls */}
    {controls.map((ctrl) => (
           <BuildControl 
              key={ctrl.label} 
             label={ctrl.label} 
             added = {() =>  props.ingredientAdded(ctrl.type)}
            remove = {() => props.ingredientDelete(ctrl.type)}
              />
    ))}
  </div>
);

export default buildControls;
