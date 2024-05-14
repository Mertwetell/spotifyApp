import { Component, OnDestroy, OnInit } from '@angular/core';
//import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TrackServiceService } from '@modules/tracks/services/track.service';
import { response } from 'express';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})

export class  TracksPageComponent implements OnInit, OnDestroy {
 // mockTracksList:Array<TrackModel>=[];

 tracsTrandingWorld:Array<TrackModel>=[];
 trackTrandingElectronic:Array<TrackModel>=[];
 /*listObservers$:Array<Subscription>=[];*/
 

  constructor(private trackService:TrackServiceService){}
  
 
  ngOnInit(): void {
   this.loadDataAll();
   this.loadDataRandom();
        //#region ejemplos rjx
       // const {data}:any=(dataRaw as any).default;
       // this.mockTracksList=data;
       //console.log(data);
       //--------------------
       /*const observer1$=this.trackService.dataTracksTrending$
       .subscribe(response=>{
        this.tracsTrandingWorld=response;
        console.log("canciones trnding",response);
       });
    
       const observer2$=this.trackService.dataTracksRandom$
       .subscribe(response=>{
        this.trackTrandingElectronic= [...this.trackTrandingElectronic,...response];
        console.log("canciones random",response);
       });
    
       this.listObservers$=[observer1$];*/
       //#endregion
  }

  loadDataAll(){
    this.trackService.getAllTracks$().toPromise()
    .then(res=>{this.tracsTrandingWorld=res;})
    .catch(error=>{console.log('Error de conexion');});
    /*.subscribe(response=>{
    
     this.tracsTrandingWorld=response;
     console.log("resul",response);
    })*/
  }
  //----------------------
 async loadDataAllAsync(){
    const dataRaw=await this.trackService.getAllTracks$().toPromise();
  }
  //---------------------


  loadDataRandom(){
    this.trackService.getAllRandom$()
    .subscribe((response:TrackModel[])=>{
    
     this.trackTrandingElectronic=response;
     //console.log("resul",response);
    }, error=>{console.log('Error de conexion')})
  }

  ngOnDestroy(): void {
   /*this.listObservers$.forEach(u=>u.unsubscribe());*/
  }
}
