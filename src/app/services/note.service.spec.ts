import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService]
    });
  });

  it('should be created NoteService', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getAnimalByNote function',inject([NoteService],(service:NoteService)=> {
    expect (service.getAnimalByNote).toBeTruthy();
  }))

  //Frog
  it('should getAnimalByNote correctly input-brr',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('brr').then(animal=>{
      expect (animal).toEqual("Frog");
    });
  }));

  it('should getAnimalByNote correctly input-birip',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('birip').then(animal=>{
      expect (animal).toEqual("Frog");
    });
  }));

  it('should getAnimalByNote correctly input-brrah',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('brrah').then(animal=>{
      expect (animal).toEqual("Frog");
    });
  }));

  it('should getAnimalByNote correctly input-croac',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('croac').then(animal=>{
      expect (animal).toEqual("Frog");
    });
  }));

  //Criket
  it('should getAnimalByNote correctly input-criccric',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('criccric').then(animal=>{
      expect (animal).toEqual("Criket");
    });
  }));

  it('should getAnimalByNote correctly input-trritrri',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('trritrri').then(animal=>{
      expect (animal).toEqual("Criket");
    });
  }));

  it('should getAnimalByNote correctly input-bribri',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('bribri').then(animal=>{
      expect (animal).toEqual("Criket");
    });
  }));

  //Dragonfly
  it('should getAnimalByNote correctly input-fiu',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('fiu').then(animal=>{
      expect (animal).toEqual("Dragonfly");
    });
  }));

  it('should getAnimalByNote correctly input-plop',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('plop').then(animal=>{
      expect (animal).toEqual("Dragonfly");
    });
  }));

  it('should getAnimalByNote correctly input-pep',inject([NoteService],(service:NoteService)=> {
    service.getAnimalByNote('pep').then(animal=>{
      expect (animal).toEqual("Dragonfly");
    });
  }));  
});
