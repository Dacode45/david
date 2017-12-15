import * as React from 'react';
import { Media } from 'react-bootstrap';

export const MMODisplay: React.SFC<{}> = () => (
    <div className="mmo-display">
        <div style={{height: '120%' }} />
        <Media>
            <Media.Body><p>You Decide To: </p>
            </Media.Body>
        </Media>
    </div>    
);

export default MMODisplay;