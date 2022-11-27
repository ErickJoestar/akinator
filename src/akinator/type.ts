// ********************************************************************************
// == Database ====================================================================
// -- Node ------------------------------------------------------------------------
export enum NodeType {
  Question = 'question',
  Subject = 'subject',
}

export type NodeBase = {
  type: NodeType;
};

export type QuestionNode = NodeBase & {
  type: NodeType.Question;

  question: string;

  yes: Node;
  no: Node;
};

export type SubjectNode = NodeBase & {
  type: NodeType.Subject;

  name: string;
};

export type Node = QuestionNode | SubjectNode;

// == Game ========================================================================
// the different States of the game
export enum GameState {
  // the game is not running
  Idle = 'idle',
  
  // the game is running
  Running = 'running',

  // the game is over, and depending on the outcome, the user may be asked to 
  // provide the name of the subject they were thinking of (if the subject was not
  // in the database)
  GuessedWrong = 'guessed-wrong',

  // the game is over (no matter the outcome)
  Over = 'over',
};

// == Action ======================================================================
export enum ActionType {
  // the game is asking the user a question
  Question = 'question',
  // the game is guessing the subject the user is thinking of
  Guess = 'guess',
  // the game is asking the user the name of the subject they were thinking of
  AskingName = 'asking-name',

}
export type ActionBase = {
  type: ActionType;
};

export type Question = ActionBase & {
  type: ActionType.Question;

  node: QuestionNode;
};

export type Guess = ActionBase & {
  type: ActionType.Guess;

  node: SubjectNode;
};

export type AskingName = ActionBase & {
  type: ActionType.AskingName;

  wrongGuess: SubjectNode;
};

export type Action = Question | Guess | AskingName;

// --------------------------------------------------------------------------------
export enum Answer {
  Yes = 'yes',
  No = 'no',
}
