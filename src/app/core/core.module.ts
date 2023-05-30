import { NgModule } from "@angular/core";
import { CoreComponent } from "./core.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { AngularMaterialModule } from "src/shared/angular-material/angular-material.module";
import { PodcastComponent } from "./podcast/podcast.component";
import { AllpodcastComponent } from './allpodcast/allpodcast.component';

@NgModule({
    declarations: [
      CoreComponent,
      PodcastComponent,
      AllpodcastComponent
    ],
    imports: [
      CommonModule,
      CoreRoutingModule,
      ReactiveFormsModule,
      AngularMaterialModule,
    ]
  })
  export class CoreModule { }