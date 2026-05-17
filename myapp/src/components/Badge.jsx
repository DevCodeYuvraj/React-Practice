import Stack from 'react-bootstrap/Stack';
import React from 'react';
import { Table, Badge } from 'react-bootstrap';

const PillExample = () => {
  const employees = [
    { id: 1, name: "Joseph Oden", dept: "Sales", salary: "$64,000", date: "Aug 3, 2024", status: "PENDING", type: "Full-Time" },
    { id: 2, name: "Carol Brown", dept: "Support", salary: "$82,000", date: "Aug 6, 2024", status: "NEGOTIATING", type: "Part-Time" },
    { id: 3, name: "Peggy Castello", dept: "Design", salary: "$120,000", date: "Aug 13, 2024", status: "FAILED", type: "Full-Time" },
    { id: 4, name: "Katherine Grey", dept: "Sales", salary: "$75,000", date: "Aug 19, 2024", status: "PAID", type: "Full-Time" },
    { id: 5, name: "Joseph Oden", dept: "Sales", salary: "$64,000", date: "Aug 3, 2024", status: "PENDING", type: "Full-Time" },
    { id: 6, name: "Carol Brown", dept: "Support", salary: "$82,000", date: "Aug 6, 2024", status: "NEGOTIATING", type: "Part-Time" },
    { id: 7, name: "Peggy Castello", dept: "Design", salary: "$120,000", date: "Aug 13, 2024", status: "FAILED", type: "Full-Time" },
    { id: 8, name: "Katherine Grey", dept: "Sales", salary: "$75,000", date: "Aug 19, 2024", status: "PAID", type: "Full-Time" },
    { id: 9, name: "Joseph Oden", dept: "Sales", salary: "$64,000", date: "Aug 3, 2024", status: "PENDING", type: "Full-Time" },
    { id: 10, name: "Carol Brown", dept: "Support", salary: "$82,000", date: "Aug 6, 2024", status: "NEGOTIATING", type: "Part-Time" },
  ];

  const getStatusBg = (status) => {
    switch (status) {
      case 'PAID': return 'success-subtle';
      case 'PENDING': return 'primary-subtle';
      case 'NEGOTIATING': return 'warning-subtle';
      case 'FAILED': return 'danger-subtle';
      default: return 'secondary-subtle';
    }
  };
  const getStatustext = (status) => {
    switch (status) {
      case 'PAID': return 'success';
      case 'PENDING': return 'primary';
      case 'NEGOTIATING': return 'warning';
      case 'FAILED': return 'danger';
      default: return 'white';
    }
  };
  const getdept = (dept) => {
    switch (dept) {
      case 'Sales': return 'bi bi-cart3';
      case 'Support': return 'bi bi-telephone-fill';
      case 'Design': return 'bi bi-vector-pen';
      default: return '';
    }
  };


  return (
    <div className="container mt-4">

      {/* Responsive Table */}

      <h3>Responsive Table</h3>

      <Table
        responsive
        bordered
        className="mt-3"
      >

        <thead className="table-light">
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
            <th>Employment Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td className={getdept(emp.dept)}>{emp.dept}</td>
              <td>{emp.salary}</td>
              <td>{emp.date}</td>
              <td>
                <Badge bg={getStatusBg(emp.status)} text={getStatustext(emp.status)}>
                  {emp.status}
                </Badge>
              </td>
              <td>{emp.type}</td>
            </tr>
          ))}
        </tbody>

      </Table>



      <div className='scrollable'>

        <Table borderedclassName="mt-3 table-prop">

          <thead className="table-light">
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>Employment Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td className={getdept(emp.dept)}>{emp.dept}</td>
                <td>{emp.salary}</td>
                <td>{emp.date}</td>
                <td>
                  <Badge bg={getStatusBg(emp.status)} text={getStatustext(emp.status)}>
                    {emp.status}
                  </Badge>
                </td>
                <td>{emp.type}</td>
              </tr>
            ))}
          </tbody>

        </Table>

      </div>

    </div>
  );
}

export default PillExample;