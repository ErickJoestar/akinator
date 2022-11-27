import { NodeType, QuestionNode } from './type';

// ********************************************************************************
export const RootNode: QuestionNode = {
  type: NodeType.Question,
  question: 'Es un mamifero?',
  yes: {
    type: NodeType.Question,
    question: 'Tiene cola?',
    yes: {
      type: NodeType.Question,
      question: 'Tiene rayas?',
      yes: {
        type: NodeType.Subject,
        name: 'Tigre',
      },
      no: {
        type: NodeType.Subject,
        name: 'Perro',
      },
    },
    no: {
      type: NodeType.Question,
      question: 'Tiene alas?',
      yes: {
        type: NodeType.Subject,
        name: 'Pajaro',
      },
      no: {
        type: NodeType.Subject,
        name: 'Pez',
      },
    },
  },
  no: {
    type: NodeType.Subject,
    name: 'Tortuga',
  },
};