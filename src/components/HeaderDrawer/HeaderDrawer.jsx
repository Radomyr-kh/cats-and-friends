import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useUIContext} from '../../context/ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MiddleDivider = styled((props) => (
  <Divider variant='middle' {...props} />
))``;

export default function HeaderDrawer() {
  const {drawerOpen, setDrawerOpen} = useUIContext();

  return (
    <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <List>
        <ListItem>
          <Typography>Home</Typography>
        </ListItem>
        <MiddleDivider />
        <ListItem>
          <Typography>Volunteer</Typography>
        </ListItem>
        <MiddleDivider />

        <ListItem>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Stories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <Typography>Blog</Typography>
                </ListItem>
                <MiddleDivider />
                <ListItem>
                  <Typography>Podcast</Typography>
                </ListItem>
                <MiddleDivider />
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <MiddleDivider />

        <ListItem>
          <Typography>Login</Typography>
        </ListItem>
        <MiddleDivider />
        <ListItem>
          <Typography>Contact Us</Typography>
        </ListItem>
        <MiddleDivider />
      </List>
    </Drawer>
  );
}
