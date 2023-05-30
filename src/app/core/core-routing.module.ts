import { RouterModule, Routes } from "@angular/router";
import { CoreComponent } from "./core.component";
import {  NgModule } from "@angular/core";
import { PodcastComponent } from "./podcast/podcast.component";
import { AllpodcastComponent } from "./allpodcast/allpodcast.component";

const routes: Routes = [
    {
      path: '',
      component: CoreComponent,
      children:[
        {
          path: 'podcasts',
          component: PodcastComponent,
        },
        {
          path: 'all',
          component: AllpodcastComponent,
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }