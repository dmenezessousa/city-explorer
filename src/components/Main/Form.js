import React from "react";
import "./Main.css";
import { Container, Form } from "react-bootstrap";
class FormComponent extends React.Component {
  render() {
    return (
      <>
        
        <Container>
          <h2>Map of the city!</h2>
          <Form className="form-inline">
            <div className="form-group mx-5  mb-4 mt-5 ">
              <input
                onChange={this.props.updateSearchQuery}
                value={this.props.searchQuery}
                type="text"
                className="form-control"
                placeholder="Enter City Name"
              />
              <button
                onClick={this.props.getLocation}
                type="submit"
                className="btn btn-primary mb-2 mt-2"
              >
                Explorer!
              </button>
            </div>
          </Form>
        </Container>
      </>
    );
  }
}

export default FormComponent;
