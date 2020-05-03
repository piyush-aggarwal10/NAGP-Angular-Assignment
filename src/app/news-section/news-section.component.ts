import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsManagementService } from '../services/news-management.service';
import { INews } from '../shared/interfaces/interface';
import { News } from '../shared/classes/classes';

@Component({
    selector: 'app-news-section',
    templateUrl: './news-section.component.html',
    styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {
 
    newsList: INews[] = [];

    constructor(private _newsManagement: NewsManagementService){
        this._newsManagement.newsUpdatedEvent.subscribe((updatedNewsList: INews[]) => {
            this.newsList = updatedNewsList;
        })
    }

    ngOnInit(): void {
        this.GetNews();
    }

    GetNews(){
       this.newsList = this._newsManagement.GetAllNews();
    }
}