import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Education } from '../interfaces/education';
import { EducationService } from '../educations/education.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  eId: number;
  quizType: string;
  education: Education;
  constructor(
    private route: ActivatedRoute,
    private educationService: EducationService
  ) { }

  ngOnInit() {
    this.eId = this.route.snapshot.paramMap.get('eId') as unknown as number;
    this.quizType = this.route.snapshot.paramMap.get('type');
    this.getEducationDetails(this.eId);        
  }

  private getEducationDetails(eId: number): void{
    this.educationService.getEducationDetails(eId)
    .subscribe((education) => {
      this.education = education;
    })
  }
  

}
