import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Volunteer } from './volunteer';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VolunteerService {

	private volunteerUrl = 'http://localhost:3000/volunteers';
	private headers = new Headers({'Content-Type': 'appication/json'});

	constructor(private http: Http) { }

	saveVolunteerData(newVolunteer: Volunteer): Promise<Volunteer> {
		return this.http	
				   .post(this.volunteerUrl, 
				   		 JSON.stringify({
				   		 		firstName: 		newVolunteer.firstName,
				   		 		lastName:  		newVolunteer.lastName,
				   		 		emailAddress: 	newVolunteer.emailAddress,
				   		 		phoneNumber: 	newVolunteer.phoneNumber,
				   		 		extension:		newVolunteer.extension,
				   		 		willCall: 		newVolunteer.willCall,
				   		 		willCanvas: 	newVolunteer.willCanvas,
				   		 		willHost: 		newVolunteer.willHost
				   		 }),
				   		 { headers: this.headers})
				   .toPromise()
				   .then(res => res.json().data as Volunteer)
				   .catch(this.handleError);
	} 

	private handleError(error: any): Promise<any> {
		console.error('An error occurred while adding volunteer data', error); 
	  	return Promise.reject(error.message || error);
	}
}