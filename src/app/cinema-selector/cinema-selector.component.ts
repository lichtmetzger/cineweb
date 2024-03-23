import { Component, OnInit } from "@angular/core";
import { Cinema } from "../api.interface";
import { ApiService } from "../api.service";

@Component({
    selector: 'app-cinema-selector',
    templateUrl: './cinema-selector.component.html',
    styleUrl: './cinema-selector.component.scss',
})

export class CinemaSelectorComponent implements OnInit {
    cinemaId = 0;
    cinemaSet = false;
    cinemas: Cinema[] = [];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getCinemas().subscribe(
            (data) => {
                this.cinemas = data;
            },
            (error) => {
                console.error('Error fetching users:', error);
            }
        );
    }

    onSetCinema() {
        if(this.cinemaId != 0) {
            this.cinemaSet = false;
        }

        this.cinemaSet = true;
    }
}
