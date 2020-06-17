import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeListContext from "../utils/EmployeeListContext";
import TableArea from "../components/TableArea/TableArea";

// This is the main component to store API get for employee roster
// All list sorting is perfomrmed byuy these functions.


function Main() {
  // set these list values to be uthe Context Provider for child components.

  const [employeeList, setEmployeeList] = useState([]);
  const [filteredEmployeeList, setFilteredEmployeeList] = useState([]);

  // Hook used to get mock employee roster from API. 
  // Empty array at the end of function allows for this function to run on initial component mount. 
  // Similar to ComponentDid Mount method uses class structure.
  
  useEffect(() => {
    API.getEmployees().then((response) => {
      setEmployeeList(response.data.results);
      setFilteredEmployeeList(response.data.results);
    });
    //eslint-dissable-next-line
  }, []);

  const searchByName = (event) => {
    const filterName = event.target.value;
    //eslint-dissable-next-line
    const filteredList = employeeList.filter((item) => {
      let results =
        item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      if (results.indexOf(filterName.toLowerCase()) !== -1) {
        return item;
      }
    });
    setFilteredEmployeeList([...filteredList]);
  };

  const sortFunction = (category) => {
    switch (category) {
      case "name":
        employeeList.sort((a, b) => {
          if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
        setFilteredEmployeeList([...employeeList]);
        break;
      case "email":
        employeeList.sort((a, b) => {
          if (a.email.toLowerCase() < b.email.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
        setFilteredEmployeeList([...employeeList]);
        break;
      case "location":
        employeeList.sort((a, b) => {
          if (
            a.location.country.toLowerCase() < b.location.country.toLowerCase()
          ) {
            return -1;
          } else {
            return 1;
          }
        });
        setFilteredEmployeeList([...employeeList]);
        break;
      default:
        break;
    }
  };

  return (
    <EmployeeListContext.Provider
      value={{ employeeList, filteredEmployeeList, sortFunction, searchByName }}
    >
      <TableArea />
    </EmployeeListContext.Provider>
  );
}

export default Main;
