
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Education } from '../interfaces/education';
import { Question } from './../interfaces/question';
import { EducationService } from '../providers/education.service';
import { QuizService } from './../providers/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  eId: number;
  quizType: string;
  education: Education;
  questions: Question[] = [];
  question: Question;
  currentIndex: number = 0;
  progress: number = 10;
  allAnswered: boolean = false;
  result: boolean = false;
  questionForm: FormGroup;  
  private formControls: any = {};

  constructor(
    private route: ActivatedRoute,
    private educationService: EducationService,
    private quizService: QuizService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.eId = this.route.snapshot.paramMap.get('eId') as unknown as number;
    this.quizType = this.route.snapshot.paramMap.get('type');
    this.getQuizDetails(this.eId);        
  }

  private getQuizDetails(eId: number): void{
    combineLatest(
      this.educationService.getEducationDetails(eId),
      this.quizService.getQuestions(eId)  
    ).subscribe((data) => {
      this.education = data[0];
      this.questions = data[1];
      if(this.questions.length){
        this.buildQuestionForm();
        this.showQuestion(this.currentIndex);
      }
    });
  }

  buildQuestionForm(){

    this.formControls = this.quizService.getFormControls(this.questions);
    console.log(this.formControls);
    this.questionForm = this.fb.group(this.formControls); // new FormGroup(this.formControls);    
    
  }

  onShowNextQuestion(question): void{
    this.showQuestion(this.currentIndex+1);
  }  

  onShowPreviousQuestion(question): void{
    this.showQuestion(this.currentIndex-1);
  }
  
  onSubmitQuiz(): void{
    this.result = true;
  }

  private showQuestion(idx: number): void{
    this.question = this.questions[idx];
    this.currentIndex = idx;
  }
  

}
