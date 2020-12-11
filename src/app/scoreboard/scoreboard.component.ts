import { MatPaginator } from '@angular/material/paginator';
import { Team } from './../../shared/Team';
import { Observable } from 'rxjs';
import { TeamService } from './../services/team.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';







@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})

export class ScoreboardComponent implements OnInit {

  scoreBoard : Team[] = [];
  //searchTeams: Team[] = [];
  searchString: any = "";
  sort: String;
 

  dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'wins', 'lose', 'tie', 'score'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(private service: TeamService) {
    console.log("constructor");
    
    this.service.listen('teamadd').subscribe((data)=> {
      // let temp : Team[] = [];
      // if (this.searchString !== "") {
      //   this.scoreBoard.forEach((score)=> {
      //     data.forEach(element => {
      //       if (element.name === score.name) {
      //         temp.push(element);
      //       }
      //     });
      //   })
      //   this.scoreBoard = temp;
      // } else {
        this.scoreBoard = data;
        this.dataSource=new MatTableDataSource(this.scoreBoard);
        this.dataSource.paginator = this.paginator;
      // }
    });
    this.service.getScoreboard("score").subscribe((res) => {
      this.scoreBoard = res;
      this.dataSource=new MatTableDataSource(this.scoreBoard);
      this.dataSource.paginator = this.paginator;
      console.log(this.scoreBoard);
    });
    
   }

  ngOnInit(): void {
     
    //console.log("onInit");
  
  }

  // search(val)
  // {
  //   console.log(val);
    
  //   if(Number(val)===NaN){
  //     this.scoreBoard = this.scoreBoard.filter(score => score.score === Number(val));
  //   } else {
  //     this.scoreBoard = this.scoreBoard.filter(score => score.name === val);
  //   }
  //   console.log(this.scoreBoard);
    
       
  // }
  onChange($event) {
    this.service.getScoreboard($event.value).subscribe((res) => {
      this.scoreBoard = res;
      this.dataSource=new MatTableDataSource(this.scoreBoard);
      this.dataSource.paginator = this.paginator;
      console.log(this.scoreBoard);
    });
  }

}
