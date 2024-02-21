import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtubeservice.service';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingVideos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchTrendingVideos();
  }

  fetchTrendingVideos() {
    const apiKey = 'AIzaSyAjc5rMjI8Klg7kZK4oxUC_xPvCUj5cljc';
    const apiUrl = 'https://www.googleapis.com/youtube/v3/videos';

    axios.get(apiUrl, {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 10, // Fetch top 10 trending videos
        key: apiKey
      }
    })
    .then(response => {
      this.trendingVideos = response.data.items;
    })
    .catch(error => {
      console.error('Error fetching trending videos:', error);
    });
  }
}