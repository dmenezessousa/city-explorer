import React from "react";
import { Toast } from "react-bootstrap";
class ToastComponent extends React.Component {
  render() {
    return (
      <>
        {this.props.error && (
          <Toast className="ml-5 mt-3" bg="danger" delay="1000">
            <Toast.Header>
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body style={{ color: "white" }}>
              {this.props.errorMessage}
            </Toast.Body>
          </Toast>
        )}
      </>
    );
  }
}

export default ToastComponent;
