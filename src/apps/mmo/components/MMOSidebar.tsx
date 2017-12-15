import * as React from 'react';

import { Tabs, Tab } from 'react-bootstrap';

export const MMOSidebar: React.SFC<{ tab: number }> = (props) => (
    <div className="mmo-sidebar">
        <Tabs activeKey={props.tab} id="mmo-sidebar-tabs">
            <Tab eventKey={1} title="Character">
                <div className="mmo-sidebar-content">
                    Character
                    </div>
            </Tab>
            <Tab eventKey={2} title="Inventory">
            <div className="mmo-sidebar-content">
                Inventory
                </div>
                </Tab>
        </Tabs>
    </div>
);

export default MMOSidebar;