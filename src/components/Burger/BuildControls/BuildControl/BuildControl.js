import React from 'react';

import Classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className = {Classes}>
            <div>{props.label}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    )
};

export default buildControls;