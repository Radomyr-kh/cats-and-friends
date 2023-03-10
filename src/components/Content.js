import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  useMediaQuery,
  createTheme,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {itemData} from './data';
import {Colors} from '../styles/index';

const Content = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        md: 900,
        sm: 600,
        xs: 0,
      },
    },
  });

  const matchMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <>
      <Box p={6} mt={-5}>
        <Typography variant='h4' gutterBottom textAlign='center'>
          Waiting for their owners
        </Typography>

        <ImageList
          variant='masonry'
          cols={matchMd ? 3 : matchSm ? 2 : 1}
          gap={8}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`/images/${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`/images/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.title}
                sx={{
                  opacity: 0.5,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
                actionIcon={
                  <IconButton
                    sx={{
                      color: Colors.dove_gray,
                      '&:hover': {
                        color: Colors.primary,
                      },
                    }}
                    aria-label={`info about ${item.title}`}
                  >
                    <FavoriteIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Content;
