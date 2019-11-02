
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

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

  constructor(
    private route: ActivatedRoute,
    private educationService: EducationService,
    private quizService: QuizService
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
        this.getQuestion(this.currentIndex);
      }
    });
  }

  showNextQuestion(question): void{
    this.getQuestion(this.currentIndex+1);
  }  

  showPreviousQuestion(question): void{
    this.getQuestion(this.currentIndex-1);
  }  

  private getQuestion(idx: number): void{
    this.question = this.questions[idx];
    this.currentIndex = idx;
  }
  

}
