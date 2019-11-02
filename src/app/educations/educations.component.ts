
import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';
import { Education } from '../interfaces/education';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {
  educations$: Observable<Education>;
  constructor(
    private educationService: EducationService
  ) { }

  ngOnInit() {
    this.getEducations();
  }

  private getEducations(): void{
    //this.educationService.getEducationList().subscribe((educations) => {
      this.educations$ = this.educationService.getEducationList();
    //});
  }

}
