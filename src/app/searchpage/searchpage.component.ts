import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtubeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {
  searchQuery: string = '';

  constructor(private youtubeService: YoutubeService, private router: Router) {}

  searchVideos() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery,} });
    }
  }
}
