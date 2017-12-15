import * as React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

export const MMOInput: React.SFC<{}> = () => (
    <div className="mmo-input">
        <Form inline={true}>
            <FormGroup controlId="mmoInput">
                <FormControl type="text" placeholder="walk forward" />
            </FormGroup>
        </Form>
    </div>
);

export default MMOInput;