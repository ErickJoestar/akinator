import { Button, Flex, Heading } from '@chakra-ui/react';

// ********************************************************************************
interface Props {
  onStartGame: () => void;
}
export const GameIdle: React.FC<Props> = ({ onStartGame }) => {
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Heading color='#666' marginBottom='24px'>Comienza un nuevo juego</Heading>
      <Button
        size='lg'
        colorScheme='teal'
        onClick={onStartGame}
      >
        Comenzar
      </Button>
    </Flex>
  )
}