import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { NavComponent } from './nav.component';
import { IntroComponent } from './intro.component';
import { SkillsComponent } from './skills.component';
import { ProjectsComponent } from './projects.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
