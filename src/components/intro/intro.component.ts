import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/services/songs.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private service: SongsService) { }

  songs:any;
  songs$:any;
  data:any;

  ngOnInit(): void {
  }

  getAllSongs(){
    this.songs = this.service.getSongs();
    this.songs$ = from(this.songs)

    this.songs$.subscribe({
      next: (data:any) => this.data = data,
      error:(error:any) => this.data = error,
      complete:() => this.data = 'complete...'
    });
  }
}
