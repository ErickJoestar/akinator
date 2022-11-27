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
      <Heading
        color='#666'
        marginBottom='24px'
        textAlign='center'
      >
        En que estabas pensando?<br/>
        Escribe su nombre y una pregunta para adivinarlo
      </Heading>
      <Input
        value={name}
        placeholder='Nombre'
        size='lg'
        marginBottom='16px'
        colorScheme='teal'
        onChange={handleNameChange}
      />
      <Input
        value={question}
        placeholder='Pregunta'
        size='lg'
        marginBottom='16px'
        colorScheme='teal'
        onChange={handleQuestionChange}
      />
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