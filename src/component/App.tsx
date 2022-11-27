import { ChakraProvider, Flex, Heading, Link } from '@chakra-ui/react';

import { GameComponent } from './Game';

// ********************************************************************************
function App() {
  return (
    <ChakraProvider>
      <Flex
        width='100vw'
        height='100vh'
        flexDirection='column'
        background='#FCFEFE'
      >
        <Flex flex='1 1' flexDirection='column' alignItems='center' paddingTop='100px'>
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
        <Link
          href='https://github.com/ErickJoestar'
          textAlign='end'
          fontSize='16px'
          color='#666'
          fontWeight='600'
          padding='4px 16px'
        >
          Erick Paul Bórquez Meza
        </Link>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
