import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';

// ********************************************************************************
interface Props {
  onAddSubject: (name: string, question: string) => void;
}
export const GameGuessedWrong: React.FC<Props> = ({ onAddSubject }) => {
  // == State =====================================================================
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');

  // == Handler ===================================================================
  const handleAddSubject = () => {
    onAddSubject(name, question);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  // == UI ========================================================================
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Heading color='#666' marginBottom='24px'>En que estabas pensando? Escribe su nombre y una pregunta para adivinarlo</Heading>
      <Input colorScheme='teal' size='lg' value={name} onChange={handleNameChange} placeholder='Nombre' marginBottom='16px' />
      <Input colorScheme='teal' size='lg' value={question} onChange={handleQuestionChange} placeholder='Pregunta' marginBottom='16px' />
      <Button
        size='lg'
        colorScheme='teal'
        disabled={name === '' || question === ''}
        onClick={handleAddSubject}
      >
        Confirmar
      </Button>
    </Flex>
  )
}