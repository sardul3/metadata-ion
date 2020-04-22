import { TicketDetailComponent } from './components/ticket/ticket-detail/ticket-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth/auth.guard';
import { NotificationsComponent } from './components/ticket/notifications/notifications.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'metadata', component: HomepageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  {path: 'ticket/:id', component: TicketDetailComponent, canActivate: [AuthGuard] },
  { path: 'ticket', component: TicketListComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
