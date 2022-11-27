import { Database } from './database';
import { Action, ActionType, Answer, GameState, NodeType } from './type';

// ********************************************************************************
/** 
 * encapsulates all the functionality needed to play the game
 */
export class Game {
  private database: Database;

  // ------------------------------------------------------------------------------
  public state: GameState;

  // the current action at the current state of the game.
  public action: Action | undefined/*no action at current state*/;

  // == Lifecycle =================================================================
  constructor(database: Database) {
    this.database = database;

    this.state = GameState.Idle;
  }

  /** stars the game (if it's not already running) */
  public start(): void {
    if(this.state === GameState.Running) throw new Error('Game is already running');

    // the game starts with the first question
    this.action = { type: ActionType.Question, node: this.database.getRootQuestion() };

    // the game is now running
    this.state = GameState.Running;
  }

  /** ends the game (if it's running) */
  public end(): void {
    this.state = GameState.Over;
    this.action = undefined;
  }

  public getState() { return this.state; } 

  // == Game Logic ================================================================
  /** returns the current action */
  // NOTE: If there is no action available, it means the game is over
  public getAction(): Action | undefined/*no action*/ {
    return this.action;
  }

  /** answer the current question or guess */
  public answer(answer: Answer): void {
    if(this.state !== GameState.Running) throw new Error('Game is not running');
    if(this.action === undefined) throw new Error('No action available');

    switch(this.action.type) {
      // if the current action is a question, we need to update the current action
      // to the next question or guess
      case ActionType.Question: {
        const question = this.action.node;
        const nextNode = answer === Answer.Yes ? question.yes : question.no;

        if(nextNode.type === NodeType.Subject) {
          this.action = { type: ActionType.Guess, node: nextNode };
        } else {
          this.action = { type: ActionType.Question, node: nextNode };
        }
        break;
      }

      // if the current action is a guess, there is no next question, so the game 
      // should end or the next action should be asking the User the name of the
      // subject they were thinking of
      case ActionType.Guess: {
        if(answer === Answer.Yes) {
          this.end();
        } else {
          this.state = GameState.GuessedWrong;
          this.action = { type: ActionType.AskingName, wrongGuess: this.action.node };
        }
        break;
      } 

      case ActionType.AskingName: {
        throw new Error('Cannot answer a question when the game is asking for the name of the subject');
      }

      default: throw new Error('Unknown action type');
    }
  }

  /** adds the subject to the database */
  public addSubject(name: string, description: string): void {
    if(this.state !== GameState.GuessedWrong) throw new Error('Game is not in GuessedWrong state');
    const action = this.action;
    if(!action || action.type !== ActionType.AskingName) throw new Error('Game is not asking for the name of the subject');

    this.database.addSubject(action.wrongGuess, name, description);
  
    // once the subject is added, the game is over
    this.end();
  }
}