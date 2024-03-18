import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from "./components/header/header.component";
import { AdvertisingComponent } from "./components/advertising/advertising.component";
import { AboutComponent } from "./components/about/about.component";
import { DonateButtonComponent } from "./components/donate-button/donate-button.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ListOfActivitiesComponent } from './components/list-of-activities/list-of-activities.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        HeaderComponent,
        AdvertisingComponent,
        AboutComponent,
        DonateButtonComponent,
        FooterComponent,
        ListOfActivitiesComponent, 
    ]
})
export class AppModule {
 }
