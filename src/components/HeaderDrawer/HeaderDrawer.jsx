import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useUIContext } from '../../context/ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MiddleDivider = styled(props => (
  <Divider
    variant="middle"
    {...props}
  />
))``;

export default function HeaderDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List>
        <ListItemButton>
          <ListItemText>
            Home
          </ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>
            Volunteer
          </ListItemText>
        </ListItemButton>
        <MiddleDivider />

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <ListItemButton>
              <ListItemText>
                Stories
              </ListItemText>
            </ListItemButton>
          </AccordionSummary>
          <AccordionDetails>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>
                Blog
              </ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>
                Podcast
              </ListItemText>
            </ListItemButton>
          </AccordionDetails>
        </Accordion>

        <MiddleDivider />
        <ListItemButton>
          <ListItemText>
            Login
          </ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>
            Contact Us
          </ListItemText>
        </ListItemButton>
        <MiddleDivider />
      </List>
    </Drawer>
  );
}
