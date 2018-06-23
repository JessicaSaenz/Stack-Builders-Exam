import {NoteModel} from '../models/note-model';
import { Injectable } from '@angular/core';


var songs = [
  {note:'brr',animal:'Frog'},{note:'fiu',animal:'Dragonfly'},{note:'criccric',animal:'Criket'},{note:'brrah', animal:'Frog'},
  {note:'pep',animal:'Dragonfly'},{note:'birip',animal:'Frog'},{note:'trritrri', animal:'Criket'},{note:'croac', animal:'Frog'},
  {note:'bribri',animal:'Criket'},{note:'plop',animal:'Dragonfly'},{note:'criccric', animal:'Criket'},{note:'brrah', animal:'Frog'}
] 

@Injectable()
export class SongService {

  constructor() { }

  getSongbyNote (note:string){
    return new Promise((resolve,reject) => {
      let flag = false;     
      let resp = {};   
      resp = songs.reduce((accumulator,current) => {
          if(current.note == note){
            flag = true
          } 
          if(current.note!== note && flag == true){           
            accumulator[current.note] = true;
          }     
          if(current.note == 'brrah' || current.note == 'croac'){
            flag = false;
          }            
        return accumulator;
      },resp);
      let array = Object.keys(resp);
      resolve(array.toString());
    })   
  }  
}
