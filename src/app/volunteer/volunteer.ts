export class Volunteer {
	constructor(
		public firstName: string,
		public lastName: string,
		public emailAddress: string, 
		public phoneNumber: string,
		public extension?: string,
		public willCanvas?: boolean,
		public willCall?: boolean,
		public willHost?: boolean
	){}
}