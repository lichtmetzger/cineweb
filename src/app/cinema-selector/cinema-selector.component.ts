import { Component } from '@angular/core';

@Component({
    selector: 'app-cinema-selector',
    templateUrl: './cinema-selector.component.html',
    styleUrl: './cinema-selector.component.scss'
})
export class CinemaSelectorComponent {
    cinemaId = 0;
    cinemaSet = false;

    onSetCinema() {
        this.cinemaSet = true;
    }
}
