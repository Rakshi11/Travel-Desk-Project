import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [managerId, setManagerId] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  // State variables for dropdown options
  const [managers, setManagers] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const managersResponse = await axios.get('/managers');
        setManagers(managersResponse.data);

        const employeesResponse = await axios.get('/employees');
        setEmployees(employeesResponse.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here
    console.log('Form Submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Address:', address);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Manager ID:', managerId);
    console.log('Employee ID:', employeeId);
    
    // Example of submitting form data
    // axios.post('/register', { firstName, lastName, address, email, mobileNumber, password, managerId, employeeId })
    //   .then(response => {
    //     console.log('Registration successful:', response);
    //   })
    //   .catch(error => {
    //     console.error('There was an error registering!', error);
    //   });
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Register</h1>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Manager ID:
          <select
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
            required
          >
            <option value="">Select Manager</option>
            {managers.map(manager => (
              <option key={manager.id} value={manager.id}>
                {manager.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Employee ID:
          <select
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          >
            <option value="">Select Employee</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
