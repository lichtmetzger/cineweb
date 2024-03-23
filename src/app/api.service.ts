// Modify the service to use the correct type
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cinema, Response} from "./api.interface";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
    /* Proxy for CORS header, original URL
     * https://app-live.cinestar.de/common/cinemas
     */
    private cinemasUrl = 'https://cs.lichtmetzger.de/mobile-api/common/cinemas'

    constructor(private http: HttpClient) { }

    getCinemas(): Observable<Cinema[]> {
        return this.http.get<Response>(this.cinemasUrl).pipe(
            map(response => response.content)
        );
    }
}
