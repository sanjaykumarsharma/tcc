import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BatchComponent } from './masters/batch/batch.component';
import { DiffcultyLevelComponent } from './masters/diffculty-level/diffculty-level.component';
import { PagesComponent } from './masters/pages/pages.component';
import { StudentComponent } from './masters/student/student.component';
import { TopicComponent } from './masters/topic/topic.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    BatchComponent,
    TopicComponent,
    DiffcultyLevelComponent,
    PagesComponent,
    StudentComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
