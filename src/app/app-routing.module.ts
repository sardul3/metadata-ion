import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'ticket', component: TicketListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
