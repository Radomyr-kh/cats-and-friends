import {Grid, Box, Typography} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import {Colors} from '../styles';

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        sx={{
          backgroundColor: Colors.shaft,
          color: Colors.muted,
          width: 'auto',
        }}
        p={4}
        rowSpacing={3}
        m={2}
        mb={8}
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h6' gutterBottom>
            About us
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem consectetur eos voluptatum possimus sunt error placeat
            iste voluptates tenetur iusto quia tempore temporibus dolore optio
            vero, libero ea distinctio!
          </Typography>
          <Box
            py={4}
            sx={{
              color: Colors.white,
            }}
          >
            <FacebookIcon sx={{paddingRight: 2}}></FacebookIcon>
            <TwitterIcon sx={{paddingRight: 2}}></TwitterIcon>
            <InstagramIcon sx={{paddingRight: 2}}></InstagramIcon>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant='h6' gutterBottom>
            Information
          </Typography>
          <Typography variant='h6'>Lorem ipsum</Typography>
          <Typography variant='h6'>Privacy & Policy</Typography>
          <Typography variant='h6'>Trems & Conditions</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant='h6' gutterBottom>
            My account
          </Typography>
          <Typography variant='h6'>Initiatives and projects </Typography>
          <Typography variant='h6'>Favorite animals</Typography>
          <Typography variant='h6'>My Account</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
