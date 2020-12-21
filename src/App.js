import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <>
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>
          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button variant="primary">Primary</Button>
          {/* Indicates a successful or positive action */}
          <Button variant="success">Success</Button>
          {/* Contextual button for informational alert messages */}
          <Button variant="info">Info</Button>
          {/* Indicates caution should be taken with this action */}
          <Button variant="warning">Warning</Button>
          {/* Indicates a dangerous or potentially negative action */}
          <Button variant="danger">Danger</Button>
          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button variant="link">Link</Button>
        </ButtonToolbar>
      </>
    );
  }
}

export default App;