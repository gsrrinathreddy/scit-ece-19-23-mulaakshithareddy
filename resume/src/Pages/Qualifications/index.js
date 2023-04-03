import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="<a href='https://pngtree.com/so/Cute'>Cute png from pngtree.com/</a>" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                66% CGPA
              </Typography>
              {" — B.TECH-ElECTRONICS AND COMMUNICATION ENGINEERING"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="<a href='https://pngtree.com/so/Cute'>Cute png from pngtree.com/</a>" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                87.9% CGPA
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Akshithareddy" src="<a href='https://pngtree.com/so/Cute'>Cute png from pngtree.com/</a>" />
        </ListItemAvatar>
        <ListItemText
          primary="Vindhyavalley High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                92% CGPA
              </Typography>
              {' — SSC'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}