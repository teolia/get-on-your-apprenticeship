import { useState, useEffect } from 'react';
import logo from './assets/hogwarts.png';
import './App.css';

function App() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters');
      const data = await response.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here is a list of all students:</p>
        <div className="App-intro">{students ? students.map(student => <div key={crypto.randomUUID()}>{student.name}</div>) : "Loading..."}</div>
      </header>
    </div>
  );
}

export default App;