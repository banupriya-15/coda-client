import { Team } from './../../shared/Team';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TeamService { 
  
  readonly root_url= "https://coda-server.herokuapp.com";

  socket : any;


  constructor(private http : HttpClient) {
        this.socket = io(this.root_url);
      }

  createTeam(name: String) {
    return this.http.post(`${this.root_url}/create`, {"name": name});
  }

  createMatch(data){
    return this.http.post(`${this.root_url}/match`, {"team1": data.team_name1 ,"team2": data.team_name2 , "result" : data.result});
  }

  getScoreboard(option): Observable<any> {
    return this.http.get(`${this.root_url}/board/${option}`)
  }

  // getMessage () {
  //   return new Observable((subscriber)=>{
  //       this.socket.on("message",(data)=>{
         
  //         subscriber.next(data);
  //       })
      
  //   })
  // }
  search(query): Observable<any> {
    return this.http.post(`${this.root_url}/search/`, {'query': query});
  }
  listen(eventname): Observable<any>{
    
    return new Observable ( (subscriber) => {
      this.socket.on(eventname,(data)=>{
        console.log(data);
        subscriber.next(data);
        
      })
    })
    }

  emit(eventName, data){
    this.socket.emit(eventName, data);
  }
}
