import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HelloComponent } from './pages/hello/hello.component';
import { JoinusComponent } from './pages/joinus/joinus.component';
import { ParticipationComponent } from './pages/participation/participation.component';
import { ShowLocationComponent } from './pages/show-location/show-location.component';


const routes: Routes = [
  { path: 'show-location', component: ShowLocationComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'join-us', component: JoinusComponent },
  { path: 'audience-participation', component: ParticipationComponent },
  { path: 'show-location', component: ParticipationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
