export class User {
    name:string
    email:string
    experience:number
    domain:string

    constructor(
      name: string,
      email: string,
      experience: number,
      domain: string
    ) {
        this.name=name;
        this.email=email;
        this.experience=experience;
        this.domain=domain;
     }
}