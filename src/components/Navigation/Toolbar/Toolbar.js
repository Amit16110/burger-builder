import React from 'react';

import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'

const Toolbar = (props) => (
    <header className = {Classes.Toolbar}>
        <div>Menu</div>
        <Logo />

        <nav>
            ...
        </nav>
    </header>
);

export default Toolbar;