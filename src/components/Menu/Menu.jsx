import { MyList } from '../../styles/header';
import { ListItemButton } from '@mui/material';

export default function Menu() {
  return (
    <MyList type="row">
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Home
      </ListItemButton>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Volunteer
      </ListItemButton>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Stories
      </ListItemButton>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Login
      </ListItemButton>
    </MyList>
  );
}
