import * as React from 'react';
import './Main.css';

import MMODisplay from './MMODisplay';
import MMOInput from './MMOInput';
import MMOSidebar from './MMOSidebar';

export const Main: React.SFC<{}> = () => (
    <div className="mmo-main">
        <div className="mmo-header">mmo header</div>
        <div className="mmo-filler-left">mmo filler left</div>
        <MMODisplay/>
        <MMOInput/>
        <MMOSidebar tab={1}/>
        <div className="mmo-filler-right">mmo filler right</div>
        <div className="mmo-footer">mmo footer</div>
    </div>
);

export default Main;