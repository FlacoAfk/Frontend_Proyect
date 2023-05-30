import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
  })
  export class PodcastService {

    baseUrl = environment.apiUrl + 'api/v1/podcasts';

    constructor(private httpClient: HttpClient) {}

    findAll(): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl);
    }

    cargarPodcast(id: any,file: File, name: string, description: string): Observable<any> {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('name', name);
      fd.append('description', description);
      return this.httpClient.post<any>(this.baseUrl + '/' + id, fd);
    }

  }