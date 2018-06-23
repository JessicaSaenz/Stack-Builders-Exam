import { TestBed, inject } from '@angular/core/testing';

import { SongService } from './song.service';

describe('SongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongService]
    });
  });

  it('should be created SongService', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getSongbyNote function',inject([SongService],(service:SongService)=> {
    expect (service.getSongbyNote).toBeTruthy();
  }));

  it('should getSongbyNote correctly input-brr',inject([SongService],(service:SongService)=> {
    service.getSongbyNote('brr').then(song=>{
      expect (song).toEqual("fiu,criccric,brrah");
    });
  }));

  it('should getSongbyNote correctly input-birip',inject([SongService],(service:SongService)=> {
    service.getSongbyNote('birip').then(song=>{
      expect (song).toEqual("trritrri,croac");
    });
  }));

  it('should getSongbyNote correctly input-plop',inject([SongService],(service:SongService)=> {
    service.getSongbyNote('plop').then(song=>{
      expect (song).toEqual("criccric,brrah");
    });
  }));

  it('should getSongbyNote correctly input-brrah',inject([SongService],(service:SongService)=> {
    service.getSongbyNote('brrah').then(song=>{
      expect (song).toEqual("");
    });
  }));

  it('should getSongbyNote correctly input-croac',inject([SongService],(service:SongService)=> {
    service.getSongbyNote('croac').then(song=>{
      expect (song).toEqual("");
    });
  }));
});
