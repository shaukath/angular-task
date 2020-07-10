import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public login(): void {
    
  }

  public getAlbums(): Observable<any> {
    const albumsURL: string = "../../assets/data/albums-data.json";
    return this.httpClient.get(albumsURL);
  }
}
