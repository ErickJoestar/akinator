import { RootNode } from './data';
import { NodeType, QuestionNode, SubjectNode  } from './type';

// ********************************************************************************
/** holds all the data for the game */
export class Database {
  private rootQuestion: QuestionNode;

  // == Lifecycle =================================================================
  constructor() {
    // create the root question
    this.rootQuestion = RootNode;
  };

  // == Accessors =================================================================
  public getRootQuestion() { return this.rootQuestion; }

  // == Methods ===================================================================
  /** 
   * modifies the SubjectNode to be a QuestionNode with the given question and the
   * given SubjectNode as the "yes" answer, while the previous SubjectNode is the
   * "no" answer.
   */
  public addSubject(subject: SubjectNode, name: string, question: string): void {
    // create the "yes" answer
    const yes: SubjectNode = {
      type: NodeType.Subject,
      name, 
    };

    // create the "no" answer
    // NOTE: clone the subject to avoid modifying the original subject node
    const no: SubjectNode = {...subject};

    // NOTE: explicitly mutating the SubjectNode to be a QuestionNode to maintain
    //       the reference from the parent QuestionNode
    //       (this is a bit hacky, but it works)
    // @ts-ignore
    subject.type = NodeType.Question;
    // @ts-ignore
    subject.question = question;
    // @ts-ignore
    subject.yes = yes;
    // @ts-ignore
    subject.no = no;
    // @ts-ignore
    delete subject.name;
  }
};