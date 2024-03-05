import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Navbar,
  NavbarButton,
} from '../user/styledComponents';
import AdminService from '../../services/admin';


export type StudentData = {
  UserId: number;
  year: number;
  user: UserData;
};

export type UserData = {
  id: number;
  smuNo: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

const ViewStudents: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'smuNo', headerName: 'SMU No', width: 130 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
  ];




  const rows = students.map((student) => ({

    id: student.user.id,
    smuNo: student.user.smuNo,
    username: student.user.username,
    email: student.user.email,
    firstName: student.user.firstName,
    lastName: student.user.lastName,
  })).filter((student) => {
    return student.id == 1;
  });

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await AdminService.getStudent();
      setStudents(students);

    };

    fetchStudents();

  }, []);

  return (
    <Container>
      <Navbar>
        <NavbarButton
          onClick={() => {

          }}>
          View Student
        </NavbarButton>
      </Navbar>
      <Title>Student Information</Title>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection

      />
    </Container>
  );
};

export default ViewStudents;
