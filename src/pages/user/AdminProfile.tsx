import React, { useState, useEffect } from 'react';
import FacultyJobService from '../../services/faculty-job';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, 
  Typography, 
  Button, 
  Avatar, 
  Box, Input, TextField, Paper, Grid, IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';




const FacultyProfile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [resume, setResume] = useState<string | null>(null);

  

  const [anchorEl, setAnchorEl] = useState<null | Element>(null);

  const open = Boolean(anchorEl);

  const [messages, setMessages] = useState([{ id: 1, content: 'Test Message' }]);

  // Function to open the file upload dialog when the "Upload Profile" button is clicked
  function handleUploadClick() {
    document.getElementById('profileUpload')?.click();
  }


  // Function to handle the change of the profile image file
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedImage = e.target?.result as string;
        setProfileImage(uploadedImage);
      };
      reader.readAsDataURL(file);
    }
  }


  const navigate = useNavigate();


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchMessages = () => {
    // TODO: Implement fetch logic here

    
  };

  const navigateToInbox = () => {
    navigate('/inbox');
    handleClose();
  };




  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1976D2', // Blue color
          color: '#FFF', // White color
          padding: '16px', // Adjust the padding as needed
        }}
      >
        My Admin Dashboard
        <Tooltip title="Menu">
          <IconButton
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={navigateToInbox}>
            <Tooltip title="Inbox">
              <IconButton
                color="inherit"
                onClick={() => {
                  // Fetch messages when the inbox is opened (future implementation)
                  fetchMessages();
                }}
              >
                <MailIcon />
              </IconButton>
            </Tooltip>
          </MenuItem>
        </Menu>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Admin Profile
            </Typography>
            <Avatar
              sx={{ width: 200, height: 200, mt: 3 }}
              alt="User Profile"
              src={profileImage || undefined}
            />  
            <Box sx={{ mt: 5 }}>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: '100%' }}
                    onClick={handleUploadClick}
                  >
                    Upload Profile
                  </Button>
                  <Input
                    type="file"
                    id="profileUpload"
                    sx={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 4 }}>
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </form>
              <Box sx={{ mt: 2, display: 'column', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: '100%' }}
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Input
                  type="file"
                  id="profileUpload"
                  sx={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </Box>
            </Box>
            {name && (
              <Paper elevation={3} sx={{ padding: 2, mt: 2, maxWidth: '80%' }}>
                <Typography variant="h6">Admin Information</Typography>
                <Typography>Name: {name}</Typography>
              </Paper>
            )}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              mt: '50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                spacing: 2,
                padding: 2,
                mb: 2,
                width: '80%',
                maxWidth: '500px',
              }}
            >
              <Typography variant="h6" sx={{ mt: 2 }}>
                View Student Information
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="/viewStudents"
                sx={{ mb: 2 }}
              >
                CHECK STUDENT
              </Button>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                spacing: 2,
                padding: 2,
                mb: 2,
                width: '80%',
                maxWidth: '500px',
              }}
            >
              <Typography variant="h6" sx={{ mt: 2 }}>
                View Course Information
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="/viewCourse"
                sx={{ mb: 2 }}
              >
                CHECK COURSE
              </Button>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                spacing: 2,
                padding: 2,
                mb: 2,
                width: '80%',
                maxWidth: '500px',
              }}
            >
              <Typography variant="h6" sx={{ mt: 2 }}>
                View Faculty Information
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="/viewFaculty"
                sx={{ mb: 2 }}
              >
                CHECK FACULTY
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );

  function handleSave() {
    // Handle saving the user's information
  }

  function handleCheckApplicants(jobId: number) {
    // Handle checking applicants for the specified job ID
    console.log(`Checking applicants for job ${jobId}`);
  }

  function handleEditPosting(jobId: number) {
    // Handle editing the posting for the specified job ID
    console.log(`Editing posting for job ${jobId}`);
  }

};

export default FacultyProfile;
