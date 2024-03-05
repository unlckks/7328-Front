import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Navbar,
  NavbarButton
} from '../user/styledComponents';
import AdminService from '../../services/admin';


export type CourseData = {
  id: number;
  courseCode: string;
  title: string;
  description: string;
};

export const ViewCourse: React.FC = () => {


  const [course, setCourse] = useState<CourseData[]>([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'courseCode', headerName: 'Course Code', width: 120 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'description', headerName: 'description', width: 250 },
  ];




  const rows = course.map((course) => ({
    id: course.id,
    courseCode: course.courseCode,
    title: course.title,
    description: course.description
  })).filter((course) => {
    return course.id == 1;
  });

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await AdminService.getCourse();
      console.log(course);
      setCourse(course);
      console.log(course);
    };

    fetchCourse();

  }, []);

  return (
    <Container>
      <Navbar>
        <NavbarButton
          onClick={() => {
          }}>
          View Course
        </NavbarButton>
      </Navbar>
      <Title>Course Information</Title>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection />
    </Container>
  );
};


export default ViewCourse;
