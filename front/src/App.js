import React, { useState } from 'react';
import logo from './hogwarts.png';
import './App.css';
import { ListGroup, ListGroupItem, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PoudlarStudents = ({ students }) => {
  return (
    <ListGroup>
      {students.map(({ name, house, yearOfBirth }) => {
        console.log(name, house);
        const key = `${name}${yearOfBirth}`;
        return (
        <ListGroupItem key={key}>
          <Card>
            <div className="card-body">
              <p className="card-text">{name}</p>
            </div>
          </Card>
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here is a list of all students:
        </p>
        <button className="btn btn-primary" type="button" onClick={callAPI}>Click Me!</button>
        <PoudlarStudents students={students} />
      </header>
    </div>
  );
})

export default App;
