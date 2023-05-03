import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LocationComponent } from './pages/location/location.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AboutComponent } from './pages/about/about.component';
import { JoinUsComponent } from './pages/joinus/joinus.component';
import { HomeComponent } from './home/home.component';
import { CastComponent } from './pages/cast/cast.component';
import { PropsComponent } from './pages/props/props.component';
import { LinksComponent } from './pages/links/links.component';
import { MissingComponent } from './pages/missing/missing.component';
import { ContactUsComponent } from './pages/contactus/contactus.component';
import { CookiesComponent } from './cookies/cookies.component';
import { HedwigPageComponent } from './pages/hedwig-page/hedwig-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    LocationComponent,
    FooterComponent,
    CalendarComponent,
    AboutComponent,
    JoinUsComponent,
    HomeComponent,
    CastComponent,
    PropsComponent,
    LinksComponent,
    MissingComponent,
    ContactUsComponent,
    CookiesComponent,
    HedwigPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
