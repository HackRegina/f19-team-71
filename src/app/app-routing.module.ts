import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { EducationsComponent } from './educations/educations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      title: 'home'
    }
  },
  {
    path: 'educations',
    component: EducationsComponent,
    data : {
      title: 'educations'
    }
  },
  {
    path: 'education-detail/:eId',
    component: EducationDetailComponent,
    data : {
      title: 'education'
    }
  },
  {
    path: 'quiz/:eId/:type',
    component: QuizComponent,
    data : {
      title: 'quiz'
    }
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
