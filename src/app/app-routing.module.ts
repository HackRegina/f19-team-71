import { HomeComponent } from './home/home.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizComponent } from './quiz/quiz.component';
import { EducationsComponent } from './educations/educations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'    
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'educations',
    component: EducationsComponent
  },
  {
    path: 'education/:eid',
    component: EducationComponent
  },
  {
    path: 'education-detail/:eid',
    component: EducationDetailComponent
  },
  {
    path: 'quiz/:eid/:type',
    component: QuizComponent
  },
  {
    path: 'quiz-result/:eid/:type',
    component: QuizResultComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
