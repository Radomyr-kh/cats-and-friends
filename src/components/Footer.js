import {Container, Grid, Box, Link, Typography, Stack} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import {Colors} from '../styles';
// import {} from '@material-ui/core';
// !Requirments:

// 1) Sould consist of 3 sections:
// ABOUT US, INFORMATION, MY ACCOUNT.

// - for 1200px (3 columns)
// - for [600px - 1200px) (1 + 2 columns)
// - for less than 600px (1 column)

const Footer = () => {
  return (
    <footer>
      <Stack
        direction='row'
        sx={{
          backgroundColor: Colors.shaft,
          color: Colors.muted,
        }}
        spacing={3}
      >
        <Box
          sx={
            {
              // width: 150,
            }
          }
        >
          <Typography variant='h6' gutterBottom>
            ABOUT US
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem consectetur eos voluptatum possimus sunt error placeat
            iste voluptates tenetur iusto quia tempore temporibus dolore optio
            vero, libero ea distinctio!
          </Typography>
          <Stack
            direction='row'
            sx={{
              // backgroundColor: Colors.whire,
              color: Colors.white,
            }}
          >
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <InstagramIcon></InstagramIcon>
          </Stack>
        </Box>
        <Box>
          <Typography variant='h6' gutterBottom>
            INFORMATION
          </Typography>
          <Typography variant='h6'>Lorem ipsum</Typography>
          <Typography variant='h6'>Privacy & Policy</Typography>
          <Typography variant='h6'>Trems & Conditions</Typography>
        </Box>
        <Box>
          <Typography variant='h6' gutterBottom>
            MY ACCOUNT
          </Typography>
          <Typography variant='h6'>Initiatives and projects </Typography>
          <Typography variant='h6'>Favorite animals</Typography>
          <Typography variant='h6'>My Account</Typography>
        </Box>
      </Stack>
    </footer>
  );
};

export default Footer;
