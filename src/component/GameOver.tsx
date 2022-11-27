import { Button, Flex, Heading } from '@chakra-ui/react';

// ********************************************************************************
interface Props {
  onRestartGame: () => void;
}
export const GameOver: React.FC<Props> = ({ onRestartGame }) => {
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Heading color='#666' marginBottom='24px'>Juego terminado</Heading>
      <Button
        size='lg'
        colorScheme='teal'
        onClick={onRestartGame}
      >
        Comenzar de nuevo
      </Button>
    </Flex>
  )
}