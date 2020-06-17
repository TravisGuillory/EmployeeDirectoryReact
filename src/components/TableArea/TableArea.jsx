import React, { useContext } from "react";
import EmployeeListContext from "../../utils/EmployeeListContext";
import './TableArea.css';
import {Container, Table, Button} from 'react-bootstrap';


function TableArea() {
  const { filteredEmployeeList } = useContext(EmployeeListContext);
  const { sortFunction, searchByName } = useContext(EmployeeListContext);

  
  return (
    <>    
      <Container >
        <Table size='sm' striped hover >
            <thead>
            <tr >
              <td>
                <input type="text" onChange={(event) => searchByName(event)}/> 
              </td>
              <td  colSpan='4' className='text-left'>
                Enter name to filter list by letter.
              </td>
            </tr>
            <tr>
            <td>
                <Button 
                  variant='outline-info'
                  className="p-2 m-2"
                  onClick={() => sortFunction("name")}>Name
                </Button>  
              </td>
              <td>
              <Button 
                  variant='outline-info'
                  className="p-2 m-2"
                  onClick={() => sortFunction("location")}>Location
                </Button> 
              </td>
              <td>
              <Button 
                  variant='outline-info'
                  className="p-2 m-2"
                  onClick={() => sortFunction("email")}>Email
                </Button>   
              </td>
              <td>
                <p className='p-2 m-2'>Phone</p>
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {filteredEmployeeList.map((employee) => {
              return (
                <tr key={employee.login.salt}>
                  <td>{employee.name.first + " " + employee.name.last}</td>
                  <td>{`${employee.location.city}, ${employee.location.state}, ${employee.location.country}`}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <img
                      src={employee.picture.thumbnail}
                      alt={employee.name.first + " " + employee.name.last}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      </>
  
  );
}
export default TableArea;
