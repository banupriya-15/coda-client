import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TeamService } from './../services/team.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  data = {
    team_name1 : "",
  team_name2 : "",
  result: "",

  }
 error=""

  

  constructor(private service : TeamService, private router : Router) {

   }

  ngOnInit(): void {
  }
 
  onSubmit(){
    
    if(this.data.team_name1 === this.data.team_name2){
             this.error ="Same teams cannot compete! Select different opponent";
             console.log(this.error);
             return this.error;
    }

    this.service.createMatch(this.data).subscribe((res) => {
      console.log(res);
     this.service.emit('teamadd','done');
      this.router.navigate(['/score'])
      
    }, (err:HttpErrorResponse) => {
      if (err.status === 404){
        this.error = err.error;
      }
      console.log(err);
    
    })

    


    
    
  }
}
