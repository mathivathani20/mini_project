import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function TeamsPage() {

const members=[
    {
        Name:"Mathivathani",
        Role:"Full Stack Devloper",
        Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw2ikFSP0Jn1KNGsv089-E0C&ust=1746025775884000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDV7q_D_YwDFQAAAAAdAAAAABAE"
    },

    {
        Name:"Boushica",
        Role:"Web Developer",
        Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw2ikFSP0Jn1KNGsv089-E0C&ust=1746025775884000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDV7q_D_YwDFQAAAAAdAAAAABAE"


    },
    {
        Name:"Jeeva",
        Role:"MERN Stack Developer",
        Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw2ikFSP0Jn1KNGsv089-E0C&ust=1746025775884000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDV7q_D_YwDFQAAAAAdAAAAABAE"
    },

]

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Teams Section
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>

  </Box>
  )
}

export default TeamsPage