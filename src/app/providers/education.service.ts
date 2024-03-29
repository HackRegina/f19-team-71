
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Education } from '../interfaces/education';
import { EDUCATIONS_MOCKS } from '../mocks/educations-mocks';
@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educations: Education[] = EDUCATIONS_MOCKS;
  constructor() { 
    console.log(this.educations);
  }

  getEducationList(): Observable<any>{
    return of(this.educations);
  }

  getEducationDetails(eId: number): Observable<any>{
    const education = this.educations.filter(education => education.id==eId);
    return of(education[0]);
  }

}
