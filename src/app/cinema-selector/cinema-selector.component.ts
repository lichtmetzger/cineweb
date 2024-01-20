import { Component } from '@angular/core';

interface CinemaData {
    value: number;
    label: string;
    cinemaNumber: number;
}

@Component({
    selector: 'app-cinema-selector',
    templateUrl: './cinema-selector.component.html',
    styleUrl: './cinema-selector.component.scss',
})

export class CinemaSelectorComponent {
    // TODO: Generate this dynamically as soon as I know how to do that in Angular
    cinemaData: CinemaData[] = [
        {
            value: 0,
            label: 'Please select',
            cinemaNumber: 0
        },
        {
            value: 1,
            label: 'CineStar Augsburg',
            cinemaNumber: 37094 },
        {
            value: 3,
            label: 'CineStar Berlin - CUBIX am Alexanderplatz',
            cinemaNumber: 46776,
        },
        {
            value: 4,
            label: 'CineStar Berlin - Treptower Park',
            cinemaNumber: 32381,
        },
        {
            value: 5,
            label: 'CineStar Berlin - Tegel',
            cinemaNumber: 37653
        }
    ];

    cinemaId = 0;
    cinemaSet = false;

    onSetCinema() {
        this.cinemaSet = true;
    }
}
