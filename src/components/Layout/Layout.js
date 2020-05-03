import React from "react";

import Aux from "../../hoc/Auxilliary";
import Classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <div> Toolbar, sidedrawer, backdrop</div>

    <main className = {Classes.Content}>
        {props.children}
    </main>
  </Aux>
);

export default layout;
