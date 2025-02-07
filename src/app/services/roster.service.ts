import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface Developer { // when I want it to be accessible to other files 
  id: number;
  name: string;
  role: string;
}

interface ScheduleEntry {
  developerId: number;
  task: string;
  shiftStart: string;
  shiftEnd: string;
  lunchBreak: string;
}

interface RosterData {
  developers: Developer[];
  schedule: { [date: string]: ScheduleEntry[] };
}

@Injectable({
  providedIn: 'root'
})



export class RosterService {

  constructor(private http:HttpClient) {  }
  private dataEndpoint = 'https://mzwa1080.github.io/roster-data/data/data.json';

  getRosterData() : Observable<RosterData>{
    return this.http.get<RosterData>(this.dataEndpoint)
  }
}
