import React, { useState } from 'react';
import logo from './hogwarts.png';
import './App.css';
import { ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PoudlarStudents = ({ students }) => {
  return (
    <ListGroup>
      {students.map(({ name, house, yearOfBirth, image }) => {
        console.log(name, house);
        const id = `${name}${yearOfBirth}`;
        return (
        <ListGroupItem key={id}>
          <Row>
            <div className="media">
              <img className="align-self-center mr-2" src={image} alt="..." height="30" width="30" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">
                  <p className="text-black">{name}</p>
                </h5>
                <div className="p-3">{house}</div>
              </div>
            </div>
          </Row>
        </ListGroupItem>
      )
      })}
    </ListGroup>
  )
}

PoudlarStudents.propTypes = {
  students: PropTypes.any,
};

const App = (() => {
  const [students, setStudents] = useState([]);

  const callAPI = () => {
    console.log("Clicked!");
    fetch("http://localhost:3000/real/students")
      .then(res => res.json())
      .then(res => {
        setStudents(res);
      })
      .catch(err => err);
  };

  return (
    <div className="App">
      <body className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="d-flex flex-column justify-content-center">
              <img src={logo} className="App-logo" alt="logo" />
              <h5>
                Here is a list of all students
              </h5>
              <Button variant="primary" onClick={callAPI}>Click Me!</Button>
            </div>
          </div>
        </div>
        <div className="row justify-content-envenly">
          <div className="col-4">
            <PoudlarStudents students={students} />
          </div>
        </div>
      </body>
    </div>
  );
})

export default App;
