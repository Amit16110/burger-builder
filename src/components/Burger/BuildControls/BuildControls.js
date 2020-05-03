import React from 'react';

import Classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => (
    <div>
             {/* Here add build controls */}
        <BuildControl />
    </div>
);

export default buildControls;