import { Button, Flex, Heading, Text } from '@chakra-ui/react';

import { Action, ActionType, Answer } from 'akinator/type';

// ********************************************************************************
interface Props {
  action: Action;

  onAnswer(answer: Answer): void;
}
export const GameRunning: React.FC<Props> = ({ action, onAnswer }) => {
  // == Handler ===================================================================
  const handleYes = () => onAnswer(Answer.Yes);
  const handleNo = () => onAnswer(Answer.No);

  // == UI ========================================================================
  const title = action.type === ActionType.Question ? 'Tu personaje...' : 'Adivina que tu personaje es...';
  const content = action.type === ActionType.Question ? action.node.question 
                  : action.type === ActionType.Guess ? action.node.name
                  : null/*not valid*/;
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Heading color='#666' marginBottom='16px'>{title}</Heading>
      
      <Text
        fontSize={action.type === ActionType.Guess ? '60px' : '28px'}
        fontWeight='500'
        color='#888'
        marginBottom='24px'
      >
        {content}
      </Text>

      <Flex alignItems='center' gap='8px'>
        <Button
          size='md'
          width='80px'
          variant='outline'
          colorScheme='teal'
          onClick={handleNo}
        >
          No
        </Button>
        <Button
          size='md'
          width='80px'
          colorScheme='teal'
          onClick={handleYes}
        >
          Sí
        </Button>
      </Flex>
    </Flex>
  )
}