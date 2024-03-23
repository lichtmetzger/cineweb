import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CinemaSelectorComponent } from './cinema-selector/cinema-selector.component';
import { ApiService } from "./api.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        CinemaSelectorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
