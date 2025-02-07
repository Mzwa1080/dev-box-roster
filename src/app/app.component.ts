import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RosterService } from './services/roster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', 
  imports: [CommonModule], // Angular directives were not recognized,so add common module since its a standalone
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'roster-webapp';

  rosterData:any = {}
  todayDate: string = '2025-02-07'

  constructor(private rosterService : RosterService){}

  ngOnInit(): void {
      this.rosterService.getRosterData().subscribe(data => {
        this.rosterData = data;
        console.log(this.rosterData);
        
      })
  }

  getDeveloperName(id: number): string {
    const developer = this.rosterData.developers?.find((dev: any) => dev.id === id);
    return developer ? developer.name : 'Unknown';
  }
  
}
