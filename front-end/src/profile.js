import React from 'react'
import {
    Modal,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardFooter,
    Table,
    Row,
    ButtonGroup,
    Col,
  } from "reactstrap";
function profile() {
//     const Grid = reactstrap.Grid;
// const Row = reactstrap.Row;
// const Col = reactstrap.Col;

// // https://react-bootstrap.github.io/components/buttons/
// const Button = reactstrap.Button;

// // https://react-bootstrap.github.io/components/jumbotron/
// const Jumbotron = reactstrap.Jumbotron;

// // https://react-bootstrap.github.io/components/modal/
// const Modal = reactstrap.Modal;
  return (
    <div>
        <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Jumbotron>
              <h1>Welcome to my page!</h1>
              <p>You can download my resume below!</p>
              <Button bsStyle="info" bsSize="large" onClick={this.open}>Download</Button>
              <Modal show={this.state.showModal}>
                <Modal.Body><h3>Downloading...</h3></Modal.Body>
                <Modal.Footer><Button onClick={this.close}>Close</Button></Modal.Footer>
              </Modal>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default profile