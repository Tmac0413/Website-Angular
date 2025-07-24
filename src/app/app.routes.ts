import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MessagesComponent } from './pages/messages/messages.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];