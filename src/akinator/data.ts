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
        type: NodeType.Question,
        question: 'Es un perro?',
        yes: {
          type: NodeType.Subject,
          name: 'Dog',
        },
        no: {
          type: NodeType.Subject,
          name: 'Cat',
        },
      },
    },
    no: {
      type: NodeType.Question,
      question: 'Tiene alas?',
      yes: {
        type: NodeType.Subject,
        name: 'Bird',
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