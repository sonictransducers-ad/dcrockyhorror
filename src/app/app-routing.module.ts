import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { JoinUsComponent } from './pages/joinus/joinus.component';
import { AboutComponent } from './pages/about/about.component';
import { LocationComponent } from './pages/location/location.component';
import { CastComponent } from './pages/cast/cast.component';
import { PropsComponent } from './pages/props/props.component';
import { LinksComponent } from './pages/links/links.component';
import { ContactUsComponent } from './pages/contactus/contactus.component';
import { MissingComponent } from './pages/missing/missing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cast', component: CastComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'prop-guide', component: PropsComponent },
  { path: 'hello', component: LinksComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: '**', component: MissingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
