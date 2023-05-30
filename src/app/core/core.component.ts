import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PodcastComponent } from './podcast/podcast.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(){
    const modalRef = this.matDialog.open(PodcastComponent, {
      width: '800px',
      maxWidth: '800px'
    }
      )
  }

}
