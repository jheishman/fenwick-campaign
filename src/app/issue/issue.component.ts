import { Component, OnInit, OnChanges, DoCheck, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit, OnChanges, DoCheck {

	@Input() currentIssue: string;

	isEconomicDevelopment: boolean;
	isCriminalJustice: boolean;
	isLandManagement: boolean;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => { this.currentIssue = params['issueName'];})

		if(this.currentIssue === 'criminaljustice'){
			this.isCriminalJustice = true;
			this.isEconomicDevelopment = false;
			this.isLandManagement = false;
		}
		else if (this.currentIssue === 'economicdevelopment'){
			this.isCriminalJustice = false;
			this.isEconomicDevelopment = true;
			this.isLandManagement = false;
		}
		else if (this.currentIssue === 'landmanagement'){
			this.isCriminalJustice = false;
			this.isEconomicDevelopment = false;
			this.isLandManagement = true;
		}		
	}	

	ngOnChanges(): void {
		console.log('on changes called');
	}

	ngDoCheck() {
		if(this.currentIssue === 'criminaljustice'){
			this.isCriminalJustice = true;
			this.isEconomicDevelopment = false;
			this.isLandManagement = false;
		}
		else if (this.currentIssue === 'economicdevelopment'){
			this.isCriminalJustice = false;
			this.isEconomicDevelopment = true;
			this.isLandManagement = false;
		}
		else if (this.currentIssue === 'landmanagement'){
			this.isCriminalJustice = false;
			this.isEconomicDevelopment = false;
			this.isLandManagement = true;
		}		
	}

}
