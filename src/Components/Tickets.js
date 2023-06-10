import React from 'react';
import { Badge, Box } from '@chakra-ui/react';

function Tickets({ width }) {
  return (
    <Box
      width={width}
      height="200px"
      borderRadius="lg"
      margin={1}
      boxShadow="lg"
      padding={3}
      backgroundColor={'green'}
    >
      <Badge borderRadius="full" px="1" colorScheme="teal">
        Tickets
      </Badge>
    </Box>
  );
}

export default Tickets;
