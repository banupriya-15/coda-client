import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TeamService } from './../services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

 team_name : String;
 err="";

  constructor(private service : TeamService, private router: Router) { }

  ngOnInit(): void {
  }

   onSubmit()
   {  
     this.service.createTeam(this.team_name).subscribe((res)=> {
       this.service.emit('teamadd','done');
       this.router.navigate(["/score"]);
       console.log(res);
       
     }, (error: HttpErrorResponse) => {
       if(error.status===400) {
         this.err = error.error;
       }
       console.log(error);
     })
     console.log(this.team_name); 
   }

}
