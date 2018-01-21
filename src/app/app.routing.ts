import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BatchComponent } from './masters/batch/batch.component';
import { HeaderComponent } from './header/header.component';
import { TopicComponent } from './masters/topic/topic.component';
import { DiffcultyLevelComponent } from './masters/diffculty-level/diffculty-level.component';
import { PagesComponent } from './masters/pages/pages.component';
import { StudentComponent } from './masters/student/student.component';
// import { AuthGuard } from './_guards/auth.guard';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HeaderComponent, children: [
        { path: 'batch', component: BatchComponent },
        { path: 'topic', component: TopicComponent },
        { path: 'diffculty-level', component: DiffcultyLevelComponent },
        { path: 'pages', component: PagesComponent },
        { path: 'student', component: StudentComponent },
    ] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
