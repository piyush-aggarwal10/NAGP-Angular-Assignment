import { Constants } from '../constants';


export class News {
    title: string
    description: string
    summary: string
    fullNews: string

    constructor(title: string, description: string, summary: string, fullNews: string){
        this.title = title;
        this.description = description;
        this.summary = summary;
        this.fullNews = fullNews;
    }
  }
  
export class Login
{    
    emailId: string
    password: string

    constructor(emailId: string, password: string){
        this.emailId = emailId;
        this.password = password;
    }
}
