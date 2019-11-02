import { EducationService } from './../providers/education.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../interfaces/education';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'AIDS Education Resources';
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
