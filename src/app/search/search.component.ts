import { TeamService } from './../services/team.service';
import { Team } from './../../shared/Team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTeams: Team[]
  displayedColumns: string[] = ['name', 'wins', 'lose', 'tie', 'score'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(private service: TeamService) {
    this.service.listen('teamadd').subscribe((res)=> {
      if (this.searchTeams) {
        //console.log("hi");
        console.log(res);
        let temp : Team[] = [];
        this.searchTeams.forEach((team) => {

          res.forEach(element => {
            if(element.name === team.name) {
              console.log("hi");
              temp.push(element);
            }
          });
        })
        this.searchTeams = temp;
        console.log(this.searchTeams);
        
      }
    })
   }

  ngOnInit(): void {
  }

  search(event) {
    this.service.search(event).subscribe((res)=> {
      this.searchTeams = res;
      console.log(res);
      
    }, err=> {
      console.log(err);
      
    })
  }

}
