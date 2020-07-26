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
    <p>
      Current Price:<strong>{props.price.toFixed(2)}</strong>
    </p>
    {/* Here add build controls */}
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.ingredientDelete(ctrl.type)}
        diableButton={props.disableButton[ctrl.type]}
      />
    ))}

    <button
      className={Classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.order}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
