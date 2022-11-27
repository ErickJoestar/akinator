import { ChakraProvider, Flex, Heading } from '@chakra-ui/react';

import { GameComponent } from './Game';

// ********************************************************************************
function App() {
  return (
    <ChakraProvider>
      <Flex
        width='100vw'
        height='100vh'
        background='#FCFEFE'
      >
        <Flex flex='1 1' flexDirection='column' alignItems='center' paddingTop='100px' paddingBottom='300px'>
          <Heading
            display='block'
            marginBottom='32px'
            fontSize='50px'
            color='teal'
            >
            Akinator
          </Heading>
          <GameComponent />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
