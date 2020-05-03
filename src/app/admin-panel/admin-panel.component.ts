import { Component } from '@angular/core';
import { INews } from '../shared/interfaces/interface';
import { NewsManagementService } from '../services/news-management.service';
import { News } from '../shared/classes/classes';
import { Constants } from '../shared/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CredentialService } from '../services/credentials.service';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
    newsList: INews[] = [];
    news: INews;
    addNewsForm: FormGroup;
 
    constructor(private _newsManagement: NewsManagementService){}

    ngOnInit(): void {

        this.GetNews();
        this.addNewsForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            summary: new FormControl('', [Validators.required]),
            fullNews: new FormControl('', [Validators.required])
        });    
    }

    GetNews(){
       this.newsList = this._newsManagement.GetAllNews();
    }

    //Form
    AddNews(){    
        this.news = new News(this.addNewsForm.value.title, this.addNewsForm.value.description, this.addNewsForm.value.summary, this.addNewsForm.value.fullNews);
        this._newsManagement.AddNews(this.news);
        this.addNewsForm.reset();
        alert("News Added Successfully!");
    }
}