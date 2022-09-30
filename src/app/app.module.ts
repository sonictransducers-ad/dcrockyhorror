import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ShowLocationComponent } from './pages/show-location/show-location.component';
import { FooterComponent } from './footer/footer.component';
import { HelloComponent } from './pages/hello/hello.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ParticipationComponent } from './pages/participation/participation.component';
import { JoinusComponent } from './pages/joinus/joinus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ShowLocationComponent,
    FooterComponent,
    HelloComponent,
    CalendarComponent,
    ParticipationComponent,
    JoinusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
