import {
  MyList,
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop
} from '../../styles/header';
import { Colors } from '../../styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import HeartIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function ActionIcons({ matchesMobile }) {
  const Component = matchesMobile
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop
  ;

  const theme = useTheme();
  const matchesTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: 'center',
            padding: matchesTablet ? '8px 0' : '8px 16px'
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <HeartIcon
              sx={{
                color: matchesMobile
                  ? Colors.secondary
                  : Colors.muted
              }}
            />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" sx={{ height: '40px' }} />
        <ListItemButton
          sx={{
            justifyContent: 'center',
            padding: matchesTablet ? '8px 0' : '8px 16px'
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <PersonIcon
              sx={{
                color: matchesMobile
                  ? Colors.secondary
                  : Colors.muted
              }}
            />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" sx={{ height: '40px' }} />
        <ListItemButton
          sx={{
            justifyContent: 'center',
            padding: matchesTablet ? '8px 0' : '8px 16px'
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <NotificationsIcon
              sx={{
                color: matchesMobile
                  ? Colors.secondary
                  : Colors.muted
              }}
            />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
