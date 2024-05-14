import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';//
import {catchError, map,mergeMap, tap}from 'rxjs/operators'
import { TrackModel } from '@core/models/tracks.model';//
import { HttpClient } from '@angular/common/http';//
import { enviroment } from 'src/environments/environment';//
//import * as dataRaw from '../../../data/tracks.json'


@Injectable({
  providedIn: 'root'
})
export class TrackServiceService {
 //#region  old code rjx example
  /*dataTracksTrending$: Observable<TrackModel[]>=of([])
 dataTracksRandom$: Observable<any>=of([])*/

  /*constructor() { 

    const {data}:any=(dataRaw as any).default;
    this.dataTracksTrending$=of(data);

    this.dataTracksRandom$= new Observable((observer)=>{
     
      const trackExample:TrackModel={
        _id:9,
        name:'Leve',
        album:"Cartel de Santa",
        url:"http;//",
        cover:"https://i1.sndcdn.com/artworks-000057006038-64jczd-t500x500.jpg"
      };
     setTimeout(()=>{observer.next([trackExample]);},3500);
     
    });
   
  }*/
//#endregion
 
private readonly url=enviroment.api;

constructor(private httClient:HttpClient) {   }

  getAllTracks$():Observable<any> {
     return this.httClient.get(`${this.url}/tracks`)
     .pipe(
      map(({data}:any)=>{return data})
     );
  }

  getAllRandom$():Observable<any> {
    return this.httClient.get(`${this.url}/tracks`)
    .pipe(
      mergeMap(({data}:any)=>this.skipById(data,1)), 
      tap(data=>console.log(data)),
      catchError((error)=>{
        console.log('algo paso', error);
        return of([]);
      })
    // map(({data}:any)=>{return data.reverse()})//,
    // map(({dataRevertida}:any)=>{return dataRevertida.filter((track:TrackModel)=>{track._id!=1})})
    );
  }
//map((dataRaw:any)=>{return dataRaw.data})

  private skipById (listTracks:TrackModel[], id:number):Promise<TrackModel[]>{
   return new Promise((resolve,reject)=>{
     const listTmp=listTracks.filter(a=>a._id!=1);
     resolve (listTmp);
   });
  }

}
