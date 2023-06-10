import React, { useState } from 'react';
import { Box, Grid, IconButton } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import AppsMenu from './AppsMenu';
import Session from './Session';
import Messages from './Messages';
import Tickets from './Tickets';
import DutyRoster from './DutyRoster';
import CommunityKnowledgeBase from './CommunityKnowledgeBase';
import Settings from './Settings';

function Dashboard() {
  const [width, setWidth] = useState(300);
  const [components, setComponents] = useState({
    settings: false,
    appsMenu: true,
    session: true,
    messages: true,
    tickets: true,
    dutyRoster: true,
    communityKnowledgeBase: true,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <IconButton
        icon={<SettingsIcon />}
        position="fixed"
        bottom="0"
        right="0"
        m={5}
        onClick={() =>
          setComponents({ ...components, settings: !components.settings })
        }
      />
      {components.settings && (
        <Settings
          width={width}
          setWidth={setWidth}
          components={components}
          setComponents={setComponents}
        />
      )}
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        rowGap={1}
        columnGap={6}
        width="100%"
        maxWidth="660px"
        padding={5}
      >
        {components.appsMenu && <AppsMenu width={`${width}px`} />}
        {components.session && <Session width={`${width}px`} />}
        {components.messages && <Messages width={`${width}px`} />}
        {components.tickets && <Tickets width={`${width}px`} />}
        {components.dutyRoster && <DutyRoster width={`${width}px`} />}
        {components.communityKnowledgeBase && (
          <CommunityKnowledgeBase width={`${width}px`} />
        )}
      </Grid>
    </Box>
  );
}

export default Dashboard;
