import React from 'react';
import {
  Box,
  CloseButton,
  Checkbox,
  Slider,
  Text,
  VStack,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

function Settings({ width, setWidth, components, setComponents }) {
  console.log(
    ' width, setWidth, components, setComponents',
    width,
    setWidth,
    components,
    setComponents
  );
  return (
    <Box
      position="fixed"
      bottom="0"
      right="0"
      m={5}
      p={5}
      bg="white"
      boxShadow="md"
      borderRadius="md"
    >
      <CloseButton
        onClick={() => setComponents({ ...components, settings: false })}
      />
      <VStack align="start" spacing={5}>
        <Text>Component Width</Text>
        <Slider
          min={200}
          max={500}
          value={width}
          onChange={(val) => setWidth(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Checkbox
          isChecked={components.appsMenu}
          onChange={(e) =>
            setComponents({ ...components, appsMenu: e.target.checked })
          }
        >
          Apps Menu
        </Checkbox>
        <Checkbox
          isChecked={components.session}
          onChange={(e) =>
            setComponents({ ...components, session: e.target.checked })
          }
        >
          Session
        </Checkbox>
        <Checkbox
          isChecked={components.messages}
          onChange={(e) =>
            setComponents({ ...components, messages: e.target.checked })
          }
        >
          Messages
        </Checkbox>
        <Checkbox
          isChecked={components.tickets}
          onChange={(e) =>
            setComponents({ ...components, tickets: e.target.checked })
          }
        >
          Tickets
        </Checkbox>
        <Checkbox
          isChecked={components.dutyRoster}
          onChange={(e) =>
            setComponents({ ...components, dutyRoster: e.target.checked })
          }
        >
          Duty Roster
        </Checkbox>
        <Checkbox
          isChecked={components.communityKnowledgeBase}
          onChange={(e) =>
            setComponents({
              ...components,
              communityKnowledgeBase: e.target.checked,
            })
          }
        >
          Community Knowledge Base
        </Checkbox>
      </VStack>
    </Box>
  );
}

export default Settings;
