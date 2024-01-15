import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './data.js';

function App() {
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <div className="App">
      <Container>
        <h1 className='text-center mt-4'>ITD Course Catalogue</h1>
        // <h2 className='text-center mt-4'> still under construction by inigoad </h2>
        <div>
            <a href="https://itd-course-catalogue-home.vercel.app">
               <button>
                  Home
               </button>
          </a>
        </div>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search course name' />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Area</th>
              <th>Program</th>
              <th>Course code</th>
              <th>Course name</th>
              <th>Course location</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter ((item) => {
                return search.toLowerCase() === ''
                  ? item 
                  : item.course_name.toLocaleLowerCase().includes(search);
                })  
              .map((item) => (
                  <tr>
                    <td>{item.area}</td>
                    <td>{item.program}</td>
                    <td>{item.course_code}</td>
                    <td>{item.course_name}</td>
                    <td>{item.course_loc}</td>
                  </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
