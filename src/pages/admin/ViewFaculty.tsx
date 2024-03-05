import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Navbar,
  NavbarButton
} from '../user/styledComponents';
import AdminService from '../../services/admin';


export type FacultyData = {
  userId: number;
  designation: string;
  department: string;
};

export const ViewFaculty: React.FC = () => {


  const [faculty, setFaculty] = useState<FacultyData[]>([]);

  const columns = [
    { field: 'userId', headerName: 'userId', width: 120 },
    { field: 'designation', headerName: 'designation', width: 200 },
    { field: 'department', headerName: 'department', width: 300 },
  ];




  const rows = faculty.map((faculty,index) => ({
    id: index,
    userId: faculty.userId,
    designation: faculty.designation,
    department: faculty.department
  }))
  ;

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const facultyData = await AdminService.getFaculty();
        if (facultyData && Array.isArray(facultyData)) {
          setFaculty(facultyData);
        } else {
          // Handle the case where facultyData is not an array
          console.error('Data fetched is not an array:', facultyData);
        }
      } catch (error) {
        // Handle the error case
        console.error('Failed to fetch faculty:', error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <Container>
      <Navbar>
        <NavbarButton
          onClick={() => {
          }}>
          View Faculty
        </NavbarButton>
      </Navbar>
      <Title>Faculty Information</Title>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection />
    </Container>
  );
};


export default ViewFaculty;
