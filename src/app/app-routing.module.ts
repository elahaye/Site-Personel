import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';
import { CourseComponent } from './course.component';
import { SkillsComponent } from './skills.component';
import { ProjectsComponent } from './projects.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'course', component: CourseComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
