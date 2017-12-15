import * as React from 'react';
import Elm from 'react-elm-components';
import { ElmMMO } from '../elm/mmo_elm.js';
import { Media } from 'react-bootstrap';

export const MMODisplay: React.SFC<{}> = () => (
    <div className="mmo-display">
        <div style={{height: '120%' }} />
        <Media>
            <Media.Body><p>You Decide To: </p>
                <Elm src={ ElmMMO } />
            </Media.Body>
        </Media>
    </div>    
);

export default MMODisplay;