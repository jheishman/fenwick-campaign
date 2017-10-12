import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { IssueComponent } from './issue/issue.component';
import { AboutComponent } from './about/about.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VolunteerService } from './volunteer/volunteer.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MenuBarComponent,
    IssueComponent,
    AboutComponent,
    VolunteerComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [ VolunteerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
