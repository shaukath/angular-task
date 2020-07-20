import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Album } from '../models/album.model';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ViewType } from '../models/view-type.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isCardView: boolean;
  public viewType: string;
  public searchText: string;
  public albumsData$: Observable<Album>;
  public albumDataUnsubscribe: Subscription;

  constructor(private dataService: DataService, private router: Router) {
    this.isCardView = false;
    this.viewType = ViewType.card;
   }

  ngOnInit() {
    this.albumsData$ = this.dataService.getAlbums();
  }

  public changeView(): void {
    this.isCardView = !this.isCardView;
    this.viewType = ViewType.card;
    if (this.isCardView) {
      this.viewType = ViewType.grid;
    }
  }

  public logout(): void {
    sessionStorage.removeItem("validUser");
    this.router.navigate(['']);
  }

}
