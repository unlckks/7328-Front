import axios, { AxiosResponse } from 'axios';

const ADMIN_API_URL = 'http://localhost:9000/admin';

/**
 * display student
 * @returns 
 */
const getStudent = async () => {
  try {
    const response = await axios.get(ADMIN_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};

const getCourse = async () => {
  
  return axios.get(ADMIN_API_URL).then((res) => {
    console.log(res);
    return res; 
  });
};
  
/**
 * display faculty
 * @returns 
 */
const getFaculty = async ()  => {
  
  return axios.get(ADMIN_API_URL).then((res) => {
    console.log(res);
    return res; 
  });
};

// Adding TA-related functions to your AuthService export
const AdminService = {
  getStudent,
  getCourse,
  getFaculty,
};

export default AdminService;
