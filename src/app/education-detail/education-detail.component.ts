
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

import { EducationService } from './../educations/education.service';
import { Education } from '../interfaces/education';
@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {
  eId: number;
  education: Education;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private educationService: EducationService
  ) { 
    
  }

  ngOnInit() {
    this.eId = this.route.snapshot.paramMap.get('eId') as unknown as number;
    this.getEducationDetails(this.eId);
  }

  private getEducationDetails(eId: number): void{
    this.educationService.getEducationDetails(eId)
    .subscribe((education) => {
      this.education = education;
    })
  }

  goBack(): void{
    this.location.back();
  }

}
