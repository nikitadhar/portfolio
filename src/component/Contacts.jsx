import { Email, EmailOutlined } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { FolderIcon } from 'lucide-react';
import React from 'react'
import styled from 'styled-components';
export default function Contacts() {
   const [dense, setDense] = React.useState(false);
   const [secondary, setSecondary] = React.useState(false);
  const Demo = styled('div')(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette?.background?.paper,
}));
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
  return (
    <div className='text-[#ffff] h-screen flex justify-between' id='contacts'>
      <div>
               <Typography variant="h4" component="h4">CONTACTS</Typography>
               <Typography>Feel free to reach out to me for any inquiries and opportunities.</Typography>
     </div>
     <div>
        <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <EmailOutlined />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
          </div>
    </div>
  )
}
