import { AuthGuard } from './auth/auth.guard';
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
    component: HomeComponent,
    data : {
      breadCrumb: 'home'
    }
  },
  {
    path: 'educations',
    component: EducationsComponent,
    data : {
      breadCrumb: 'educations'
    }
  },
  {
    path: 'education/:eId',
    component: EducationComponent,
    data : {
      breadCrumb: 'education'
    }
  },
  {
    path: 'education-detail/:eId',
    component: EducationDetailComponent,
    data : {
      breadCrumb: 'education'
    }
  },
  {
    path: 'quiz/:eId/:type',
    component: QuizComponent,
    data : {
      breadCrumb: 'quiz'
    }
  },
  {
    path: 'quiz-result/:eId/:type',
    component: QuizResultComponent
  },
  {
    path: 'admin/questions',
    component: QuizComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
