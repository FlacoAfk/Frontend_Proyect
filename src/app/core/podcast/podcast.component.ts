import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { PodcastService } from '../service/podcast.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent {

  selectedFile!: File;
  name: string = '';
  description: string = '';
  podcast!: FormGroup;
  userId: any = localStorage.getItem('userId');

  constructor(private podcasService: PodcastService,
    private fb: FormBuilder,
    private matDialog: MatDialogRef<any>) {}

    ngOnInit(): void {
      this.podcast = new UntypedFormGroup({
        title: new UntypedFormControl('', Validators.required),
        hola: new UntypedFormControl('', Validators.required),
      });
    }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  submitForm(): void {
    if (this.podcast.valid) {
      this.name = this.podcast.get('title')?.value;
      this.description = this.podcast.get('hola')?.value;
      console.log(this.name);
      console.log(this.description);      
      this.podcasService.cargarPodcast(this.userId, this.selectedFile ,this.name, this.description).subscribe({
        next: (data) => {
          Swal.fire('!Success!', 'Podcast uploaded successfully', 'success');
          this.matDialog.close();
        },
        error: (err) => {
          Swal.fire('!Success!', 'Podcast uploaded successfully', 'success');
          this.matDialog.close();
        }
      });
    }
  }

  uploadFile(): void {}
    

}
