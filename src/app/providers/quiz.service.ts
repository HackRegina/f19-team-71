
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Question } from './../interfaces/question';
import { QUESTIONS_MOCKS } from './../mocks/questions-mocks';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions: Question[] = QUESTIONS_MOCKS;

  constructor(
    private fb: FormBuilder
  ) { }

  getQuestions(eId: number): Observable<Question[]>{
    //return of(this.questions);
    return of(this.questions.filter(question => {
      if(question.eId==eId){
        question['key'] = `q_${question.id}`;
        return question;
      }
    }));
  }

  getFormControls(questions: Question[] ) {
    let group: any = {};
    questions.map((question) => {
      if(question.correctAnswers.length>1)
      {  
        group[question.key] = this.createCheckboxFormGroup(question);
      }else{
        group[question.key] = new FormControl('');
      }
    });
    return group;
  }

  private createCheckboxFormGroup(question): FormGroup{
    let checkboxOptions: any = {};

    question.options.map((option)=> {
      checkboxOptions[option.id] = new FormControl(option.id || '');
    });
    const checkboxFormControl = this.fb.group(checkboxOptions);
    return checkboxFormControl;
  }  
    

}
