import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { SongService } from '../app/services/song.service';
import { NoteService } from '../app/services/note.service';


@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [SongService,NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
