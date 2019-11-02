
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Question } from './../interfaces/question';
import { QUESTIONS_MOCKS } from './../mocks/questions-mocks';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions: Question[] = QUESTIONS_MOCKS;

  constructor() { }

  getQuestions(eId: number): Observable<Question[]>{
    return of(this.questions);
    return of(this.questions.filter(question => question.eId==eId));
  }

}
