import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey: string = environment.youtubeApiKey;
  apiUrl: string = 'https://www.googleapis.com/youtube/v3/search';
  apiurl: string = 'https://www.googleapis.com/youtube/v3/videos';
  
  constructor(private http: HttpClient) {}

  searchVideos(query: string): Observable<any> {
    const maxResults = 15;
    const url = `${this.apiUrl}?q=${query}&part=snippet&type=video&maxResults=${maxResults}&key=${this.apiKey}`;
    return this.http.get(url);
  }
  fetchTrendingVideos(): Observable<any> {
    const maxResults = 15; // Adjust as needed
    const url = `${this.apiUrl}?part=snippet&chart=mostPopular&maxResults=${maxResults}&key=${this.apiKey}`;
    return this.http.get(url);
  }

}