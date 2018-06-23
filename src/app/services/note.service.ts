import { Injectable } from '@angular/core';

const notes: any = {
  Frog: {     
    brr:'brr',
    birip:'birip',
    brrah:'brrah',
    croac: 'croac'
  },
  Dragonfly: {     
    fiu:'fiu',
    plop:'plop',
    pep:'pep'
  },
  Criket: {     
    criccric:'criccric',
    trritrri:'trritrri',
    bribri:'bribri',
  }
};

@Injectable()
export class NoteService {

  constructor() { }

  getAnimalByNote(note:string){
    return new Promise ((resolve,reject) => {
      var resp = Object.keys(notes).filter(key => {
        return notes[key][note];
      }).map(key => Object.assign(notes[key],{key:key}))
      resolve(resp[0].key);
    })     
  }
}
