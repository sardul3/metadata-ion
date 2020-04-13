import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'ticket', component: TicketListComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
