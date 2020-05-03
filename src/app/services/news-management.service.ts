import { Injectable, EventEmitter } from '@angular/core';
import { INews } from '../shared/interfaces/interface';
import { News } from '../shared/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class NewsManagementService {
  
    newsUpdatedEvent: EventEmitter<INews[]> = new EventEmitter<INews[]>();

    newsList: INews[] = [];

    constructor(){
        this.AddSampleNews();
    }

    AddNews(newsDTO: INews) : void {
        this.newsList.unshift(newsDTO);
        this.newsUpdatedEvent.emit(this.newsList);
    }

    GetAllNews() : INews[] {
        return this.newsList;
    }

    AddSampleNews(){
        let news1 = new News("Coronavirus India News Highlights", "Confirmed COVID-19 cases in India rise to 37,776; death toll at 1,223", "Live updates of the novel coronavirus pandemic and its socio-economic impact. Total confirmed cases in India have risen to 37,776.", "The novel coronavirus, or COVID-19, pandemic has spread across 185 countries and territories. Today is the 39th day of India’s nationwide lockdown, which has been further extended till May 17. The government has extended the nationwide lockdown to contain coronavirus by two more weeks from May 4 onwards. The entire country has been colour coded into Red, Orange and Green Zones. The rules are the strictest in the Red Zone districts and progressively gets easier in the Orange and Green Zones. Confirmed COVID-19 cases in India stand at 37,776. The death toll from the outbreak in India is at  1,223. Maharashtra, Gujarat and Delhi have reported the highest number of cases. Globally, there have been over 33.4 lakh confirmed cases of COVID-19. At least 2.38 lakh people have died so far. The United States, Spain, Italy, France, Germany and the UK are the most-affected countries.");
        this.newsList.unshift(news1);
    }
}
