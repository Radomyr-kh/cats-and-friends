import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {itemData} from './data';
import {Colors} from '../styles/index';

// !Requirments:
// 1) md = 900 px and bigger: (elements should be placed in 3 cfolumns)
// 2) sm = for [600px - 900px) elements should be placed in two columns:
// 3) xs = for less than 600px screen size elements should be placed in one column:

const Content = () => {
  return (
    <>
      <Typography variant='h4' gutterBottom sx={{}}>
        Waiting for their owners
      </Typography>

      <ImageList variant='masonry' cols={3} gap={8}>
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
    </>
  );
};

export default Content;
