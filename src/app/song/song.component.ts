import { Component, OnInit } from '@angular/core';
import { SongService} from '../services/song.service';
import { NoteService} from '../services/note.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  song: any;
  selected: any;
  animal: any;
  silence: boolean = false;

  constructor(private songService: SongService,
    private noteService: NoteService) {

   }

  ngOnInit() {
   
  }

  getSong(){
    this.songService.getSongbyNote(this.selected).then(song=>{
      if(song == ''){
        this.silence= true;      
      } else{
        this.silence= false;  
        this.song = JSON.stringify(song);   
      }      
    })
  }

  onSelect(deviceValue) {
    this.selected = deviceValue;
    this.song = "";
    this.silence= false; 
    this.noteService.getAnimalByNote(this.selected).then(animal=>{
      this.animal = animal;
    })
  }
}
