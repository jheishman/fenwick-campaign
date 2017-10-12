import { Component, OnInit } from '@angular/core';
import { Volunteer } from './volunteer';
import { VolunteerService } from './volunteer.service'

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

	model: Volunteer;
	submitted = false;

	constructor( private volunteerService: VolunteerService ) { }

	ngOnInit() {
		this.model = this.initializeVolunteer();
  	}

  	onSubmit() {
  		this.submitted = true;
  		console.log('volunteer submitted');
  		// this.volunteerService.saveVolunteerData(this.model)
  		// 	.then(() => { this.model = this.initializeVolunteer() })
  		// 	.catch(error => { console.log(error) });
  		this.model = this.initializeVolunteer();
  	}

  	initializeVolunteer() : Volunteer {
  		var volunteer = new Volunteer( '', 
									   '',
									   '',
									   '',
									   '',
									   false,
									   false,
									   false);
  		return volunteer;
  	}
  	get diagnostic() { return JSON.stringify(this.model); }
}
