import {Typography, Button, Box, Stack, Grid} from '@mui/material';
import {Colors} from '../styles';

// !Requirments:
// Banner should contain:

//? 1) image (you can use any pictue). Change image size accordingly to the size of the screen (you can choose size values)
//? 2) 3 text elements with different sizes (use Typography component for this),
//? 3) button Donate - customize it so that it looks like shown below (size, sharp edges, change text color on hover)
//? 4) for screen size less than 600px image and text elements should be aligned vertically

const Banner = () => {
  // const breakpointsUpMd = useMediaQuery(theme.breakpoints.up("md"));

  // { breakpointsUpMd && <HeaderNav /> }

  return (
    <>
      <Grid
        container
        // my={4}
        sx={{
          bgcolor: Colors.body_bg,
        }}
        spacing={10}
      >
        <Grid item xs={12} sm={6}>
          <Box>
            <img
              src='/images/banner-cat1.png'
              alt=''
              // style={{width: '100%', height: '100%'}}
              style={{width: '100%', height: 'auto'}}
            />
          </Box>
        </Grid>

        {/*//! Space-between: even  */}
        <Grid my={3} px={10} item xs={12} sm={6}>
          <Stack spacing={4}>
            <Box>
              <Typography
                variant='h3'
                gutterBottom
                sx={{
                  typography: {
                    md: 'h3',
                    sm: 'h4',
                    xs: 'h5',
                  },
                }}
              >
                Our motto
              </Typography>
              <Typography
                variant='h1'
                gutterBottom
                sx={{
                  typography: {
                    md: 'h1',
                    sm: 'h2',
                    xs: 'h3',
                  },
                }}
              >
                Help animals
              </Typography>
              {/* gutterBottom = bottom margin */}
              {/* <Typography variant='h6'> */}
              {/* <Typography variant='subtitle1'> */}
              <Typography variant='body1'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                eos similique ipsum, commodi hic ut numquam blanditiis
                repellendus omnis architecto maxime voluptates laudantium
                delectus quibusdam cum eligendi obcaecati placeat dolorem!
              </Typography>
            </Box>

            <Box>
              <Button
                variant='contained' // adds bottom shadow
                sx={{
                  backgroundColor: Colors.primary,
                  color: Colors.black,
                  borderRadius: 0,
                  padding: '20px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: Colors.primary,
                    color: 'white',
                    // backgroundColor: 'gold',
                  },
                }}
              >
                Donate
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
