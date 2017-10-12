import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { IssueComponent } from '../issue/issue.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent},
	{ path: 'contact', component: ContactComponent },
	{ path: 'volunteer', component: VolunteerComponent },
	{ path: 'issue/:issueName', component: IssueComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path : '**', component: HomeComponent }
]

@NgModule({
  imports: [
  	RouterModule.forRoot(routes, { enableTracing: true }),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }